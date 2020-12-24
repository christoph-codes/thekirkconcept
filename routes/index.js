const express = require('express');
const router = express.Router();

router.get('/healthcheck', (req, res) => {
	try {
		res.send({ status: 'Everything is healthy BUD' });
	} catch (err) {
		res.send({ status: 'Everything is NOT healthy BUD' });
	}
});

module.exports = router;