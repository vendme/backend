const router = require('express').Router()
const verifyToken = require('../../auth/restricted-middleware')
const Markets = require('../helpers/marketsHelper.js')
const Users = require('../helpers/usersHelper.js')

router.get('/', async (req, res) => {
  try {
    const markets = await Markets.getMarkets()
    res.status(200).json(markets)
  } catch (error) {
    res.status(500).json({ error })
  }
})
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const market = await Markets.getMarketById(id)
    market
      ? res.status(200).json(market)
      : res.status(404).json({ error: 'Market is not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id/stalls', async (req, res) => {
  const { id } = req.params
  try {
    const market = await Markets.getStallsByMarketId(id)
    market
      ? res.status(200).json(market)
      : res.status(404).json({ error: 'Stalls in this market are not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', verifyToken, async (req, res) => {
  try {
    const { id } = await Users.findByUID(req.body.uid)
    const user_market = id
    delete req.body.uid
    const body = {
      ...req.body,
      user_market,
      created_at: Date.now()
    }
    const market = await Markets.addMarket(body)
    res.status(201).json(market)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error adding market information to the database'
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const market = await Markets.editMarket(req.params.id, req.body)
    if (market) {
      res.status(200).json(market)
    } else {
      res.status(404).json({ message: 'The market could not be found' })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: 'Error updating the market'
    })
  }
})
router.delete('/:id', async (req, res) => {
  try {
    const count = await Markets.deleteMarket(req.params.id)
    if (count > 0) {
      res.status(200).json({ message: 'The market has been deleted' })
    } else {
      res.status(404).json({ message: 'The market could not be found' })
    }
  } catch (error) {
    // log error to database
    console.log(error)
    res.status(500).json({
      message: 'Error removing the market'
    })
  }
})

router.get('/:id/products', async (req, res) => {
  const { id } = req.params
  try {
    const market = await Markets.getProductsByMarketId(id)
    market
      ? res.status(200).json(market)
      : res.status(404).json({ error: 'Products in this market are not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})
module.exports = router
