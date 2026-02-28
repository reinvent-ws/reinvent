import { FastifyTypeInstance, Service } from "../types";
import z from "zod";
import { randomUUID } from "crypto";

const services: Service[] = []

export async function servicesCRUD(app: FastifyTypeInstance) {
    app.get('/services', {
        schema: {
            description: 'List services',
            tags: ['services'],
            response: {
                200: z.array(z.object({
                    id: z.string(),
                    name_service: z.string(),
                    url: z.string(),
                    domain: z.string()
                }))
            }
        }
    }, () => {
        return services
    })

    app.post('/services', {
        schema: {
            description: 'Create a new services',
            tags: ['services'],
            body: z.array(z.object({
                name_service: z.string(),  
                url: z.string().url(),
                domain: z.string()
            })),
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
    
    app.delete('/services', {
        schema: {
            description: 'Remove a service',
            tags: ['services'],
        }
    }, () => {
        return {}
    })
}