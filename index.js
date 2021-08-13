const config = require('./config.json');
const { join } = require('path');

const fastify = require("fastify");
const app = fastify();

app.register(require('fastify-static'), {
    root: join(__dirname, "frontend/static"),
    prefix: '/static/',
});

app.register(require('./api'), {
    prefix: '/api',
});

app.get('/*', (req, res) =>
    res.sendFile("index.html", join(__dirname, 'frontend'))
);

app.setNotFoundHandler((req, res) =>
    res.sendFile("index.html", join(__dirname, 'frontend'))
);

app.setErrorHandler((err, req, res) => {
    console.error(err.stack);
    return res.sendFile("index.html", join(__dirname, 'frontend'));
});

app.listen(config.port, '0.0.0.0', () =>
    console.log(`* Server is listening requests on *:${config.port}...`)
);