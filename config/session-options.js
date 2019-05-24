require('dotenv').config()

const sessionOptions = {
    name: 'vendme',
    secret: process.env.COOKIE_KEY,
    cookie: {
        maxAge: 1000 * 60 * 60, // 1 hour
        secure: false
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: require('../database/dbConfig'),
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
        clearInterval: 1000 * 60 * 60 // hour
    })
}

module.exports = sessionOptions;