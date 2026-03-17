import { FastifyTypeInstance } from "../types";
import { sectorCardCRUD } from "./sectors-card";
import { servicesCRUD } from "./services";
import { usersCRUD } from "./users";

export async function routes(app: FastifyTypeInstance) {

    app.register(usersCRUD)
    app.register(servicesCRUD)
    app.register(sectorCardCRUD)
}