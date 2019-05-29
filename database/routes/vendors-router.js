const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Vendors = require('../helpers/vendorsHelper.js')

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

router.post('/', async (req, res) => {
  try {
    const vendor = await Vendors.addVendor(req.body);
    res.status(201).json(vendor);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error adding the vendor',
    });
  }
})

module.exports = router