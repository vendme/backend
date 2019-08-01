const router = require('express').Router()
const verifyToken = require('../../auth/restricted-middleware')
const Vendors = require('../helpers/vendorsHelper.js')
const Users = require('../helpers/usersHelper.js')

router.get('/', async (req, res) => {
  try {
    const vendor = await Vendors.getVendors()
    res.status(200).json(vendor)
  } catch (error) {
    res.status(500).json({ error })
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const vendor = await Vendors.getVendorById(id)
    vendor
      ? res.status(200).json(vendor)
      : res.status(404).json({ error: 'Vendor is not found' })
  } catch (error) {
    res.status(507).json({ error })
  }
})

router.post('/', verifyToken, async (req, res) => {
  try {
    const { id } = await Users.findByUID(req.body.uid)
    const user_vendor = id
    delete req.body.uid
    const body = {
      ...req.body,
      user_vendor
    }
    const vendor = await Vendors.addVendor(body)
    res.status(201).json(vendor)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error adding the vendor'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const vendor = await Vendors.editVendor(req.params.id, req.body)
    if (vendor) {
      res.status(200).json(vendor)
    } else {
      res.status(404).json({ message: 'The vendor could not be found' })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: 'Error updating the vendor'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const count = await Vendors.deleteVendor(req.params.id)
    if (count > 0) {
      res.status(200).json({ message: 'The vendor has been deleted' })
    } else {
      res.status(404).json({ message: 'The vendor could not be found' })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: 'Error removing the vendor'
    })
  }
})

router.get('/:id/stalls', async (req, res) => {
  const { id } = req.params
  try {
    const vendor = await Vendors.getStallsByVendorId(id)
    vendor
      ? res.status(200).json(vendor)
      : res.status(404).json({ error: 'Stalls in this vendor are not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id/products', async (req, res) => {
  const { id } = req.params
  try {
    const vendor = await Vendors.getProductsByVendorId(id)
    vendor
      ? res.status(200).json(vendor)
      : res.status(404).json({ error: 'Products in this vendor are not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

module.exports = router
