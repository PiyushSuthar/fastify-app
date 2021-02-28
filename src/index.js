const fastify = require('fastify')({
    logger: true
})

// Bring in ROutes
const routes = require('./Routes')

// DB
const mongoose = require('mongoose')

// DB Connection
mongoose.connect('mongodb://localhost/lcofasti', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MONGO is Ready!!")
    })
    .catch(err => {
        console.log(err)
    })

// ROUTES
fastify.get('/', async (request, reply) => {
    return {
        visitor: "LearnCodeOnline.in"
    }
})

routes.forEach((route, index) => {
    fastify.route(route)
})

// starting server
const start = async () => {
    try {
        await fastify.register(require('fastify-express'))
        fastify.use(require('cors')())
        await fastify.listen(8000)
        fastify.log.info(`Server is running at `)
    } catch (error) {
        console.log(error)
    }
}

start()