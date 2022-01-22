const EventEmitter = require("events");
const Constants = require("./Constants");
const WebSocketManager = require("./ws/WebSocketManager");

class Client extends EventEmitter {
	constructor(token, options) {
		super();
		this.token = token;
		this.options = Object.assign({
			intents: Constants.INTENTS.allNonPrivileged,
		}, options);
	}
	connect() {
		return new WebSocketManager(this.token, this.options).connect(); 
	}
}

module.exports = Client;
