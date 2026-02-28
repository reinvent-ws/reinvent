import fastify from 'fastify'
import { fastifyCors }  from '@fastify/cors'
import { validatorCompiler, serializerCompiler, jsonSchemaTransform} from 'fastify-type-provider-zod'
import { fastifySwagger} from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { routes } from './routes/routes'

export const app = fastify()


app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, { origin: '*' })

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Typed Api',
            version: '1.0.0',
        }
    },
    transform: jsonSchemaTransform,
})

app.register( fastifySwaggerUi, {
    routePrefix: '/docs',
})

app.register(routes)

app.listen({port: 3333}).then(()=> {
    console.log('Server rodando na porta 3333')
})