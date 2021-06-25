// Always check to see our server is running and healthy
const healthcheck = (req, res) => {
	try {
		res.statusCode = 200;
		res.send({ status: 'Everything is healthy BUD' });
	} catch (err) {
		res.send({ status: 'Everything is NOT healthy BUD' });
	}
};
export default healthcheck;
