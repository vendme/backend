const paymentApi = require("./payments");

const configureRoutes = app => {
  console.log("in paymentsRouter")
  paymentApi(app);
};

module.exports = configureRoutes;