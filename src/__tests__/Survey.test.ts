import request from "supertest";
import { app } from "../app";

import createConnection from "../database";

describe("Surveys", () => {
    beforeAll(async () => {
        const connection = await createConnection();
        // It's been deleted by the postest script in the package.json
        // await connection.dropDatabase();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Survey 1",
            description: "Survey description 1"
        });

        expect(response.status).toBe(201);
    });

    it("Should list all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "Survey 2",
            description: "Survey description 2"
        });

        const response = await request(app).get("/surveys");

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
    });
})