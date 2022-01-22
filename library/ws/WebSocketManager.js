const WebSocket = require("ws");
const Constants = require("../Constants");

class WebSocketManager {
	socket = new WebSocket(`wss://gateway.discord.gg/?v=${Constants.GATEWAY_VERSION}&encoding=json`);
	interval = null;

	constructor(client) {
		this.client = client;
	}

	connect() {
		try {
			this.socket.on("message", msg => {
				const payload = JSON.parse(msg.toString());
				const { op, d, s, t } = payload;

				switch(op) {
				case Constants.GatewayOPCodes.DISPATCH:
					// eslint-disable-next-line no-case-declarations
					const event = require(`../handlers/${t}`);
					event(this.client, payload);
					break;
				case Constants.GatewayOPCodes.HELLO:
					// eslint-disable-next-line no-case-declarations
					const { heartbeat_interval } = d.heartbeat_interval;
					this.interval = this.heartbeat(heartbeat_interval, s);
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
		Constants.IDENTIFY.d.token = this.client.options.token;
		Constants.IDENTIFY.d.intents = this.client.options.intents;
		return this.socket.send(JSON.stringify(Constants.IDENTIFY));
	}
}

module.exports = WebSocketManager;
