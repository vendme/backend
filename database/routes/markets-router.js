const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Markets = require('../helpers/marketsHelper.js')

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
//router.get('/:id', async (req, res) => {})
module.exports = router