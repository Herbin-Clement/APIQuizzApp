const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-cors'));

fastify.register(require('./routes/question'));

fastify.listen(3001, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
});