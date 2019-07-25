const router = require('express').Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    // if wishing to update database with user paid toggle
    res.status(200).send({ success: stripeRes });
  }
};

  router.get("/", (req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
    });
  });

  router.post("/", (req, res) => {
    console.log("inside payments post")
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd"
    };
    stripe.charges.create(body, stripeChargeCallback(res));
  });

module.exports = router;