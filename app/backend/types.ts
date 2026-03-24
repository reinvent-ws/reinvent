import { FastifyBaseLogger, FastifyInstance, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerDefault } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

export type FastifyTypeInstance = FastifyInstance<
    RawServerDefault,
    RawRequestDefaultExpression,
    RawReplyDefaultExpression,
    FastifyBaseLogger,
    ZodTypeProvider
>

export type UserProps = {
    id: string,
    name: string,
    email: string
}

export type SectorCardProps = {
    id: string,
    role: string,
    job_img: string,
    open_menu: boolean,
}

export type ServiceProps = {
    id: string,
    name_service: string,
    url: string,
    domain: string,
}

