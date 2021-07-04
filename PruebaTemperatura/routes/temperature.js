const express = require('express');
const router = express.Router();
const temperatures = require('../services/temperature');

router.get('/', async function (req, res, next) {
	try {
		console.log(req.query);
		res.json(await temperatures.getEntries(req.query));
	} catch (err) {
		console.error(`Error while getting temperatures `, err.message);
		next(err);
	}
});

module.exports = router;
