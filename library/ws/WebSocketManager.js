const WebSocket = require("ws");
const Constants = require("../Constants");

class WebSocketManager {
	constructor() {
		this.socket = new WebSocket(`wss://gateway.discord.gg/?v=${Constants.GATEWAY_VERSION}&encoding=json`);
		this.interval = null;
	}

	async connect() {

	}
}

module.exports = WebSocketManager;