const router = require('express').Router()
const verifyToken = require('../../auth/restricted-middleware')
const Users = require('../helpers/usersHelper')
const Markets = require('../helpers/marketsHelper')
const Vendors = require('../helpers/vendorsHelper')

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => res.send(err))
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findById(id)
    user
      ? res.status(200).json(user)
      : res.status(404).json({ error: 'user is not found' })
  } catch (error) {
    res.status(507).json({ error })
  }
})

router.get('/type/:id', async (req, res) => {
  const { id } = req.params
  try {
    const market = await Markets.getMarketByUserId(id)
    const vendor = await Vendor.getVendorByUserId(id)
    market
      ? res.status(200).json({ type: 'market', ...market })
      : vendor
      ? res.status(200).json({ type: 'vendor', ...vendor })
      : res.status(404).json({ error: 'user is not found' })
  } catch (error) {
    res.status(507).json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const user = await Users.addUser(req.body)
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error adding the user'
    })
  }
})

router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = await Users.findByUID(req.body.uid)
    if (req.params.id == id) {
      const edited = await Users.editUser(id, {
        profile_pic: req.body.profile_pic
      })
      res.status(200).json(edited)
    } else {
      res.status(500).json({
        message: 'You are not the user you are trying to edit'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error editing the user'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const count = await Users.deleteUser(req.params.id)
    if (count > 0) {
      res.status(200).json({ message: 'The user has been deleted' })
    } else {
      res.status(404).json({ message: 'The user could not be found' })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: 'Error removing the user'
    })
  }
})

module.exports = router
