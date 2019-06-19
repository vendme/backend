require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const Users = require('../database/helpers/usersHelper');

passport.serializeUser((user, done) => {
	try {
		done(null, user.id);
	} catch (error) {
		console.log(error);
	}
});
passport.deserializeUser(async (id, done) => {
	try {
		const user = await Users.findById(id);
		done(null, user.id);
	} catch (error) {
		console.log(error);
	}
});

passport.use(
	new GoogleStrategy(
		{
			// options for google strategy
			callbackURL: '/auth/google/redirect',
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
		},
		async (accessToken, refreshToken, profile, done) => {
			const { id, displayName } = profile;
			// check if user is already in database
			console.log('google strategy profile data', profile);

			// check if user already exists in the users table
			let existsAlready = await Users.findByGoogleId(id);
			// add user
			if (!existsAlready) {
				const result = await Users.add({
					googleID: id,
					username: displayName,
					email: 'hey@meathead.com', // not nullable
					password: 'password', // not nullable
				});
				newUser = await Users.findByGoogleId(id);
				console.log('new user created: ' + JSON.stringify(newUser));
				done(null, newUser);
			} else {
				// user already exists
				console.log(
					`user exists already and is ${JSON.stringify(existsAlready)}`
				);
				done(null, existsAlready);
			}
		}
	)
);
