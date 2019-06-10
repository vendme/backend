const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js');


module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Restricted endpoint - missing or bad token!'});
      } else {
        req.decodedJwt = decodedToken; // make the token available to the rest of the API
        console.log('decoded token', req.decodedJwt);
        next();
      }
    })
  } else {
    res.status(401).json({ message: 'user not verified!'});
  }
};