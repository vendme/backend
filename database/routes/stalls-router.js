const router = require('express').Router();

const Stalls = require('../helpers/stallsHelper')

router.get('/', (req, res) => {
  Stalls.find()
    .then(stalls => {
      res.json(stalls);
    })
    .catch(err => res.send(err));
});

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const stall = await Stalls.findBy(id)
    stall
      ? res.status(200).json(stall)
      : res.status(404).json({ error: 'stall is not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})



module.exports = router;