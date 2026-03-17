import { FastifyTypeInstance, ServiceProps } from "../types";
import z from "zod";
import { randomUUID } from "crypto";

const services: ServiceProps[] = []

export async function servicesCRUD(app: FastifyTypeInstance) {

    const setBody = z.array(z.object({
        id: z.string(),
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

    // app.get('/services/:id', {
    //     schema: {
    //         description: 'Update a service',
    //         tags: ['services'],
    //         body: setBody,
    //         response: {
    //             200: z.null().describe('Oops! Service updated successfully! Please check the database.')
    //         }
    //     }
    // }, async (request, reply) => {
    //     for (const { id, name_service, url, domain } of request.body as any) {
    //         const index = services.findIndex(service => service.id === id);
    //         if (index !== -1) {
    //             services[index] = { id, name_service, url, domain };
    //         }
    //     }
    //     return reply.status(200).send(null)
    // })

    app.post('/services', {
        schema: {
            description: 'Create a new services',
            tags: ['services'],
            body: setBody,
            response: {
                201: z.null().describe('Oops! Service created successfully! Please check the database.')
            }
        }
    }, async (request, reply) => {
        for (const { id, name_service, url, domain } of request.body) {
            services.push({
                id: randomUUID(),
                name_service,
                url,
                domain
            });
        }
        return reply.status(201).send(null)
    })

    app.delete('/services', {
        schema: {
            description: 'Remove a service',
            tags: ['services'],
            body: z.array(z.object({
                id: z.string()
            })),
            response: {
                204: z.null().describe('Service removed successfully! Please check the database. No more services left.')
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
}