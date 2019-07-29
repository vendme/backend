const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Products = require('../helpers/productsHelper.js')

router.get('/', async (req, res) => {
  try {
    const products = await Products.getProducts()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error })
  }
})
router.get('/category', async (req, res) => {
  try {
    const category = await Products.getCategories()
    res.status(200).json(category)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const product = await Products.getProductById(id)
    product
      ? res.status(200).json(product)
      : res.status(404).json({ error: 'Product is not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/vendor/:id', async (req, res) => {
  const { id } = req.params
  try {
    const products = await Products.getProductsByVendor(id)
    products
      ? res.status(200).json(products)
      : res.status(404).json({ error: 'Products by vendor not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', async (req, res) => {
  try {
    const product = await Products.addProduct(req.body)
    res.status(201).json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error adding product information to the database'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const product = await Products.editProduct(req.params.id, req.body)
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({ message: 'The product could not be found' })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: 'Error updating the product'
    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const count = await Products.deleteProduct(req.params.id)
    if (count > 0) {
      res.status(200).json({ message: 'The product has been deleted' })
    } else {
      res.status(404).json({ message: 'The product could not be found' })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: 'Error removing the product'
    })
  }
})

module.exports = router
