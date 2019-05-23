const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session)
const passport = require('passport');
require('../config/passport-setup');
require('dotenv').config();
const sessionOptions = require('../config/session-options');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../database/routes/users-router.js');
const vendorRouter = require('../database/routes/vendors-router.js');
const marketRouter = require('../database/routes/markets-router.js');

const server = express();

server.use(session(sessionOptions));
server.use(passport.initialize());
server.use(passport.session());
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', usersRouter)
server.use('/api/vendor', vendorRouter)
server.use('/api/market', marketRouter)
server.use('/', authRouter)

server.get("/", (req, res) => {
  res.send("I am the Vendme backend server. Up and running!");
});

module.exports = server;