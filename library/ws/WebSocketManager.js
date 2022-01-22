const WebSocket = require("ws");
const Constants = require("../Constants");

class WebSocketManager {
	constructor(token, options) {
		this.socket = new WebSocket(`wss://gateway.discord.gg/?v=${Constants.GATEWAY_VERSION}&encoding=json`);
		this.interval = null;
		this.options = options;
		this.token = token;
		this.heartbeat_interval = null;
	}

	connect() {
		try {
			this.socket.on("message", msg => {
				const payload = JSON.parse(msg.toString());
				const { op, d, s } = payload;
				if (this.heartbeat_interval === null) this.heartbeat_interval = d.heartbeat_interval;

				switch(op) {
				case Constants.GatewayOPCodes.DISPATCH:
					console.log(payload);
					break;
				case Constants.GatewayOPCodes.HELLO:
					this.interval = this.heartbeat(this.heartbeat_interval, s);
					this.identify();
					break;
				case Constants.GatewayOPCodes.HEARTBEAT_ACK:
					break;
				}
			});
		} catch(e) {
			console.log(e);
		}
	}

	heartbeat(ms, s) {
		return setInterval(() => {
			Constants.HEARTBEAT.d = s;
			this.socket.send(JSON.stringify(Constants.HEARTBEAT));
		}, ms);
	}

	identify() {
		Constants.IDENTIFY.d.token = this.token;
		Constants.IDENTIFY.d.intents = this.options.intents;
		return this.socket.send(JSON.stringify(Constants.IDENTIFY));
	}

}

module.exports = WebSocketManager;
