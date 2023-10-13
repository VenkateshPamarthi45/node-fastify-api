const fastify = require('fastify')
var Car = require('./models/car.js')

const serverOptions = {
    logger: true
}

const app = fastify(serverOptions);

app.get("/car", (request, reply) => {
    return new Car("tata")
})

app.listen({
    port: 8000
}).then((address) => {
    console.log(address);
})