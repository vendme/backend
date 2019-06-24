const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();
const admin = require("../firebase-admin/admin");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../database/routes/users-router.js");
const vendorRouter = require("../database/routes/vendors-router.js");
const marketRouter = require("../database/routes/markets-router.js");
const stallRouter = require("../database/routes/stalls-router.js");
const server = express();

async function verifyToken(req, res, next) {
  const idToken = req.headers.authorization;

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    if (decodedToken) {
      req.body.uid = decodedToken.uid;
      return next();
    } else {
      return res.status(401).send("You are not authorized!");
    }
  } catch (e) {
    return res.status(401).send("You are not authorized!");
  }
}

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/vendor", vendorRouter);
server.use("/api/market", marketRouter);
server.use("/api/stalls", stallRouter);
server.use("/auth", authRouter);
//server.use('/', usersRouter)

server.get("/", (req, res) => {
  res.send("I am the Vendme API/server. Up and running!");
});

module.exports = server;
