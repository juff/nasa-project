const API_URL = 'http://localhost:8000/v1';

async function httpGetPlanets() {
	const response = await (await fetch(`${API_URL}/planets`)).json();
	return response;
}

async function httpGetLaunches() {
	const response = await (await fetch(`${API_URL}/launches`)).json();

	return response.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
	console.log('httpSubmitLaunch: ', {
		launch,
	});
	try {
		return await fetch(`${API_URL}/launches`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(launch),
		});
	} catch (error) {
		return {
			ok: false,
		};
	}
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
	try {
		return await fetch(`${API_URL}/launches/${id}`, {
			method: 'delete',
		});
	} catch (error) {
		console.log(error);
		return {
			ok: false,
		};
	}
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
