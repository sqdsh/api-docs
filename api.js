const fetch = require('node-fetch');
const config = require("./config.json");

module.exports = (fastify, opts, done) => {
	fastify.route({
		method: "GET",
		url: "/user/:userID",
		handler: async (req, res) => {
			let data = await fetch(`https://api.sqdsh.top/blacklist/${req.params.userID}?token=${config.api_key}`)
                .then(r => r.json()).catch(() => null);

            return res.send(data);
		}
	});
	done();
};