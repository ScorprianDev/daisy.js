const EventEmitter = require("events");
const Constants = require("./Constants");
const WebSocket = require("ws");

class Client extends EventEmitter {
	constructor(token, options) {
		super();
		this.token = token;
		this.options = Object.assign({
			compress: true,
			largeThreshold: 250,
			intents: Constants.INTENTS.allNonPrivileged,
		}, options);
	}

	
}

module.exports = Client;
