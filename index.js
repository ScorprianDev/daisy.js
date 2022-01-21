const Client = require("./library/Client");

function Daisy(token, options) {
	return new Client(token, options);
}

module.exports = Daisy;