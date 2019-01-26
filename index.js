const express = require('express');
const cors = require('cors');

const port = 5000;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	const isOk = Math.random() > 0.5 ? true : false;

	if (isOk) {
		res.json({ message: 'Everything is fine ' });
	} else {
		res.status(500).json({ message: 'There was an Error!' });
	}
});

app.listen(port, () => {
	console.log(`server started listening on port ${port}`);
});
