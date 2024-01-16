import express from 'express';
import * as config from './config';

const app = express();

app.get('/', (req, res) => {
	res.send(`
<html>
	<head>
		<title>Info Site</title>
	</head>
	<body>
		<h1>Info Site</h1>
		<p>Welcome to this site at Render.</p>
	</body>
</html>			
			`);
});

app.listen(config.getPort(), () => {
	console.log(`Listening at http://localhost:${config.getPort()}`);
});