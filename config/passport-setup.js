const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
require('dotenv').config()
const Users = require('../database/helpers/usersHelper')

passport.serializeUser((user, done) => {
  try {
    done(null, user.id)
  } catch (error) {
    console.log(error)
  }
})
passport.deserializeUser(async (id, done) => {
  try {
    const user = await Users.findById(id)
    done(null, user.id)
  } catch (error) {
    console.log(error)
  }
})

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      callbackURL: '/auth/google/redirect',
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    }, 
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName } = profile
      // check if user is already in database
      console.log(profile)
      // check if user already exists in the users table
      let exists = await Users.findByGoogleId(id)
      // add user
      if (!exists) {
        const result = await Users.add({
          googleID: id, 
          username: displayName,
          email: 'hey@meathead.com', // email is set to notNullable() 
          password: 'password' // we don't need this anymore with oauth
        })
        exists = await Users.findByGoogleId(id)
        console.log('new user created: ' + JSON.stringify(exists))
        done(null, exists)
      } else {
        console.log(`user is ${JSON.stringify(exists)}`)
        done(null, exists)
      }
    }
  )
)
