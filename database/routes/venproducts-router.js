const router = require('express').Router();
const verifyToken = require('../../auth/restricted-middleware');
const VProducts = require('../helpers/vendorsProductsHelper.js');
const Users = require('../helpers/usersHelper.js');

router.get('/', async (req, res) => {
	try {
		const vproducts = await VProducts.getVendorsProducts();
		res.status(200).json(vproducts);
	} catch (error) {
		res.status(500).json({ error });
	}
});

module.exports = router;
