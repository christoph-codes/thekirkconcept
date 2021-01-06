import axios from 'axios';

const testfetch = async (req, res) => {
	try {
		const response = await axios
			.get('https://dog.ceo/api/breeds/image/random');
		return response.data.message;
		// res.status(200).send({ res });
	} catch (err) {
		console.log('Did not work.');
		res.status(500).send({ status: err });
	}
};
export default testfetch;
