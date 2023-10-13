const fastify = require('fastify')
const serverOptions = {
    logger: true
}

const app = fastify(serverOptions);
app.listen({
    port: 8000
}).then((address) => {
    console.log(address);
})