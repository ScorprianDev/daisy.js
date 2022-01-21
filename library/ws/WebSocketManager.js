const WebSocket = require("ws");
const Constants = require("../Constants");

class WebSocketManager {
	constructor() {
		this.socket = new WebSocket(`wss://gateway.discord.gg/?v=${Constants.GATEWAY_VERSION}&encoding=json`);
		this.interval = null;
	}

	async connect() {
		try {
			const gatewayURL = `wss://gateway.discord.gg/?v=${Constants.GATEWAY_VERSION}&encoding=json`;
			const socket = new WebSocket(gatewayURL);
			let heartbeat = null;

			socket.on("message", msg => {
				const payload = JSON.parse(msg.toString());
				const { op, d } = payload;
				if (heartbeat === null) heartbeat = d.heartbeat_interval;
				const heartbeating = { op: 1, d: null };
				const identify = {
					"op": 2,
					"d": {
						"token": this.token,
						"intents": this.options.intents,
						"properties": {
							"$os": "linux",
							"$browser": Constants.LIBRARY_NAME,
							"$device": Constants.LIBRARY_NAME
						}
					}
				};
				switch(op) {
				case 10:
					setInterval(() => {
						console.log(`Sending heartbeat every ${heartbeat} miliseconds`);
						socket.send(JSON.stringify(heartbeating));
					}, heartbeat);
				
					socket.send(JSON.stringify(identify));
					break;
				}
				console.log(payload);
			});
		} catch(e) {
			console.log(e);
		}
	}
}

module.exports = WebSocketManager;
