const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startSever() {
	await mongoConnect();
	await loadPlanetsData();
	await loadLaunchData();
	server.listen(PORT, () => {
		console.log(`listing on port ${PORT}`);
	});
}

startSever();
