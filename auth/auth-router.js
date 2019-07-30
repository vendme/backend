const router = require('express').Router()
const Users = require('../database/helpers/usersHelper.js')
const verifyToken = require('./restricted-middleware')

// REGISTER ENDPOINT
router.post('/register', (req, res) => {
  let user = req.body
  Users.addUser(user)
    .then(saved => {
      console.log(saved)
      res.status(201).json(saved)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
})

router.get('/verify', verifyToken, async (req, res) => {
  let uid = req.body.uid
  try {
    const { id } = await Users.findByUID(uid)
    const user = await Users.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
