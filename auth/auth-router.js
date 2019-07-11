const router = require('express').Router()
const Users = require('../database/helpers/usersHelper.js')

// REGISTER ENDPOINT
router.post('/register', (req, res) => {
  let user = req.body
  console.log(user)

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router
