import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        // It's been deleted by the postest script in the package.json
        // await connection.dropDatabase();
        await connection.runMigrations();
    });

    it("Should be able to registry a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(201);
    });

    it("Should fail on registry a new user for an existing e-mail", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            name: "User Example"
        });

        expect(response.status).toBe(400);
    });

    // afterAll(async () => {
    //     const connection = await createConnection();
    //     await connection.dropDatabase();
    // });

    // beforeEach(async () => {
    //     const connection = await createConnection();
    //     await connection.dropDatabase();
    // });
})