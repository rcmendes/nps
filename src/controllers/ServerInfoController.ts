import { Request, Response } from "express";

class ServerInfoController {
    async status(request: Request, response: Response) {
        response.send("Up")
    }
}

export { ServerInfoController };