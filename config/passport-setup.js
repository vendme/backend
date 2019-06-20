const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require('passport-facebook');
require("dotenv").config();
const Users = require("../database/helpers/usersHelper");
console.log('ENV Variables', process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.COOKIE_KEY, process.env.DATABASE_ENV)
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
      callbackURL: "/auth/google/redirect",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName } = profile;
      // check if user is already in database
      console.log("google strategy profile data", profile);

      // check if user already exists in the users table
      let existsAlready = await Users.findByGoogleId(id);
      // add user
      if (!existsAlready) {
        const result = await Users.add({
          googleID: id,
          username: displayName,
          email: "hey@meathead.com", // not nullable
          password: "password" // not nullable
        });
        newUser = await Users.findByGoogleId(id);
        console.log("new user created: " + JSON.stringify(newUser));
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

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"]
    },
    async (accessToken, refreshToken, profile, cb) => {
      const { id, displayName, email } = profile;
      console.log("facebook CB - profile data: ", profile);

      // let existsAlready = await Users.findByFacebookId(id);

      // if (!existsAlready) {
      //   const result = await Users.add({
      //     facebookId: id,
      //     username: displayName,
      //     email: email,
      //     password: "password"
      //   });

      //   newUser = await Users.findByFacebookId(id);
      //   console.log("new user created: " + JSON.stringify(newUser));
      //   done(null, newUser);
      // } else {
      //   console.log(
      //     `user exists already and is ${JSON.stringify(existsAlready)}`
      //   );
      //   done(null, existsAlready);
      // }

      // User.findOrCreate({ facebookId: profile.id }, function(err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
