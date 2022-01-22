const Client = require("./library/Client");

function Daisy(client) {
	return new Client({ ...client });
}

module.exports = Daisy;