const express = require('express');
const router = express.Router();

// ...Routes all go here!

// Always check to see our server is running and healthy
router.get('/healthcheck', (req, res) => {
	try {
		res.send({ status: 'Everything is healthy BUD' });
	} catch (err) {
		res.send({ status: 'Everything is NOT healthy BUD' });
	}
});

module.exports = router;