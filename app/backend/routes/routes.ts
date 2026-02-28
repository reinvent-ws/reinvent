import { FastifyTypeInstance } from "../types";
import { servicesCRUD } from "./services";
import { usersCRUD } from "./users";

export async function routes(app: FastifyTypeInstance) {

    app.register(usersCRUD)
    app.register(servicesCRUD)
}