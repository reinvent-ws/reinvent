import { FastifyTypeInstance, User } from "../types";
import z from "zod";
import { randomUUID } from "crypto";

const users: User[] =  []

export async function usersCRUD(app: FastifyTypeInstance) {
    app.get('/users', {
        schema: {
            description: 'List users',
            tags: ['users'],
            response: {
                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string()
                }))
            }
        }
    }, () => {
        return users
    })

    app.post('/users', {
        schema: {
            description: 'Create a new user',
            tags: ['users'],
            body: z.object({
                name: z.string(),  
                email: z.string().email(),

            }),
            response: {
                201: z.null().describe('User created')
            }
        }
    }, async (request, reply) => {
        const { name, email } = request.body

        users.push({
            id: randomUUID(),
            name,
            email
        })

        return reply.status(201).send(null)
    })

    app.delete('/users', {
        schema: {
            description: 'Remove a user',
            tags: ['users'],
        }
    }, () => {
        return {}
    })
}