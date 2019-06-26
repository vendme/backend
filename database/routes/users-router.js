const router = require('express').Router();

const Users = require('../helpers/usersHelper');

router.get('/', verifyToken, (req, res) => {
	Users.getAllUsers()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => res.send(err));
});

router.get('/getUser', verifyToken, (req, res) => {
	Users.findById(req.body.uid)
		.then(user => {
			res.json(user);
		})
		.catch(err => {
			res.send(err);
		})
})

router.post('/', verifyToken, async (req, res) => {

	try {
		const user = await Users.add(req.body);
		res.status(201).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: 'Error adding the user',
		});
	}
});

router.delete('/', verifyToken, async (req, res) => {

	try {
		const count = await Users.deleteUser(req.body.uid);
		if (count > 0) {
			res.status(200).json({ message: 'The user has been deleted' });
		} else {
			res.status(404).json({ message: 'The user could not be found' });
		}
	} catch (error) {
		// log error to database
		console.log(error);
		res.status(500).json({
			message: 'Error removing the user',
		});
	}
});

module.exports = router;
