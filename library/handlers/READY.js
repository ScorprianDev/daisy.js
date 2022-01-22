module.exports = function(client, payload) {
	console.log(payload);
	client.user = {
		verified: payload.d.user.verified,
		username: payload.d.user.username,
		mfaEnabled: payload.d.user.mfa_enabled,
		id: payload.d.user.id,
		flags: payload.d.user.flags,
		email: payload.d.user.email,
		discriminator: payload.d.user.discriminator,
		bot: payload.d.user.bot,
		avatar: payload.d.user.avatar
	};
	client.guilds = payload.d.guilds;
	client.presences = payload.d.presences;
	client.applications = {
		id: payload.d.application.id,
		flags: payload.d.application.flags
	};

	console.log(client);
};