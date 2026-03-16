import { FastifyTypeInstance, Service } from "../types";
import z from "zod";
import { randomUUID } from "crypto";

const services: Service[] = []

export async function servicesCRUD(app: FastifyTypeInstance) {

    const setBody = z.array(z.object({
        name_service: z.string(),  
        url: z.string(),
        domain: z.string()
    }))

    app.get('/services', {
        schema: {
            description: 'List services',
            tags: ['services'],
            response: {
                200: setBody
            }
        }
    }, () => {
        return services
    })

    app.post('/services', {
        schema: {
            description: 'Create a new services',
            tags: ['services'],
            body: setBody,
            response: {
                201: z.null().describe('Service created')
            }
        }
    }, async (request, reply) => {
        for (const { name_service, url, domain } of request.body) {
            services.push({
                id: randomUUID(),
                name_service,
                url,
                domain
            });
        }
        return reply.status(201).send(null)
    })

    app.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
        try {
          // If the body is empty, return an empty object or handle as needed
          if (!body) {
            return done(null, {});
          }
          // Ensure body is a string before parsing
          const json = JSON.parse(typeof body === 'string' ? body : body.toString());
          done(null, json);
        } catch (err) {
            (err as any).statusCode = 400
            done(err as any, undefined)
        }
      })
    
    app.delete('/services', {
        schema: {
            description: 'Remove a service',
            tags: ['services'],
            body: z.array(z.object({
                id: z.string()
            })),
            response: {
                204: z.null().describe('Service removed')
            }
        }
    }, async (request, reply) => {
        for (const { id } of request.body as any) {
            const index = services.findIndex(service => service.id === id);
            if (index !== -1) {
                services.splice(index, 1);
            }
        }
        return reply.status(204).send(null)
    })
}