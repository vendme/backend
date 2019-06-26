const router = require('express').Router();

const secrets = require('../config/secrets.js');
const Users = require('../database/helpers/usersHelper.js');

// REGISTER ENDPOINT 
router.post('/register', verifyToken, (req, res) => {

  const { email, uid } = req.body;

  let user = {
    email, uid
  }

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;

