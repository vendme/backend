const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require('../auth/auth-router.js');
//const usersRouter = require('../users/users-router.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/', authRouter)
//server.use('/', usersRouter)

server.get("/", (req, res) => {
  res.send("I am the Vendme backend server. Up and running!");
});

module.exports = server;