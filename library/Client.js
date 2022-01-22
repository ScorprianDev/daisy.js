const EventEmitter = require("events");
const Constants = require("./Constants");
const WebSocketManager = require("./ws/WebSocketManager");

class Client extends EventEmitter {
	socket = new WebSocketManager(this);

	constructor(options) {
		super();
		this.options = Object.assign({
			token: this.token,
			intents: Constants.INTENTS.allNonPrivileged,
		}, options);
	}

	connect() {
		return this.socket.connect();
	}
}

module.exports = Client;