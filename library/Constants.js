const LIBRARY_NAME = "Daisy";
module.exports.LIBRARY_NAME = LIBRARY_NAME;

module.exports = {
	BASE_URL: "https://discord.com/api",
	GATEWAY_VERSION: "9",
	ENDPOINTS: {
		GATEWAY: "/gateway",
		GATEWAY_BOT: "/gateway/bot",
	},
	ActivityTypes: {
		GAME:      0,
		STREAMING: 1,
		LISTENING: 2,
		WATCHING:  3,
		CUSTOM:    4,
		COMPETING: 5
	}
};

const INTENTS = {
	guilds:                 1 << 0,
	guildMembers:           1 << 1,
	guildBans:              1 << 2,
	guildEmojisAndStickers: 1 << 3, guildEmojis: 1 << 3, // [DEPRECATED]
	guildIntegrations:      1 << 4,
	guildWebhooks:          1 << 5,
	guildInvites:           1 << 6,
	guildVoiceStates:       1 << 7,
	guildPresences:         1 << 8,
	guildMessages:          1 << 9,
	guildMessageReactions:  1 << 10,
	guildMessageTyping:     1 << 11,
	directMessages:         1 << 12,
	directMessageReactions: 1 << 13,
	directMessageTyping:    1 << 14,
};

INTENTS.allNonPrivileged = INTENTS.guilds
    | INTENTS.guildBans
    | INTENTS.guildEmojisAndStickers
    | INTENTS.guildIntegrations
    | INTENTS.guildWebhooks
    | INTENTS.guildInvites
    | INTENTS.guildVoiceStates
    | INTENTS.guildMessages
    | INTENTS.guildMessageReactions
    | INTENTS.guildMessageTyping
    | INTENTS.directMessages
    | INTENTS.directMessageReactions
    | INTENTS.directMessageTyping;
INTENTS.allPrivileged = INTENTS.guildMembers
    | INTENTS.guildPresences;
INTENTS.all = INTENTS.allNonPrivileged | INTENTS.allPrivileged;

module.exports.INTENTS = INTENTS;

module.exports.GatewayOPCodes = {
	DISPATCH:              0, EVENT: 0, // [DEPRECATED]
	HEARTBEAT:             1,
	IDENTIFY:              2,
	PRESENCE_UPDATE:       3, STATUS_UPDATE: 3, // [DEPRECATED]
	VOICE_STATE_UPDATE:    4,
	VOICE_SERVER_PING:     5,
	RESUME:                6,
	RECONNECT:             7,
	REQUEST_GUILD_MEMBERS: 8, GET_GUILD_MEMBERS: 8, // [DEPRECATED]
	INVALID_SESSION:       9,
	HELLO:                 10,
	HEARTBEAT_ACK:         11,
	SYNC_GUILD:            12,
	SYNC_CALL:             13
};

module.exports.HEARTBEAT = {
	op: 1,
	d: null
};

module.exports.IDENTIFY = {
	"op": 2,
	"d": {
		"token": "",
		"intents": "",
		"properties": {
			"$os": "linux",
			"$browser": LIBRARY_NAME,
			"$device": LIBRARY_NAME
		}
	}
};
