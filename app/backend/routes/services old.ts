import { FastifyTypeInstance } from "../types";
import z from "zod";
import { randomUUID } from "crypto";
import { RouteHandlerMethod } from "fastify";

interface Service {
    id: string,
    name_service: string,
    url_icon: string,
    domain: string,
}

type Body = Service[]

export interface RouteGeneric {
    Body: Body
}

export async function servicesCRUD(app: FastifyTypeInstance) {
    // app.get('/services', {
    //     schema: {
    //         description: 'List services',
    //         tags: ['services'],
    //         response: {
    //             200: z.array(z.object({
    //                 id: z.string(),
    //                 name_service: z.string(),
    //                 url: z.string(),
    //                 domain: z.string()
    //             }))
    //         }
    //     }
    // }, () => {
    //     return services
    // })

    const postArraySchema = {
        body: {
            type: 'array' as const, // 'as const' helps TypeScript infer the literal type
            items: {
                type: 'object' as const,
                required: ['name_service', 'url_icon', 'domain'],
                properties: {
                    name_service: { type: 'string' },
                    url_icon: { type: 'url' },
                    domain: { type: 'string'}
                },
            },
            // Optional: Add an example for better Swagger UI visualization
            examples: [
                { name_service: 'Node.js', url_icon: 'cms.com/icon', domain: 'CMS' },
                { name_service: 'Postman', url_icon: 'postman.com/icon', domain: 'CMS' }
            ]
        },
        response: {
            200: {
            type: 'object' as const,
            properties: {
                message: { type: 'string' },
                count: { type: 'number' }
            }
            }
        }
    };

    const postArrayHandler: RouteHandlerMethod = (request, reply) => {
        const items = request.body as Array<{ name_service: string; url_icon: string; domain: string }>;
        console.log(`Received ${items.length} items`);
        
        reply.send({ 
          message: 'Items received successfully', 
          count: items.length 
        });
    };

    app.post<RouteGeneric>('/services', {
        schema: postArraySchema,
        handler: postArrayHandler
      });
}