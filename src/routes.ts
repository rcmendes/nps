import { Router } from "express";
import { ServerInfoController } from "./controllers/ServerInfoController";
import { UserController } from "./controllers/UserController"


const router = Router();

const userController = new UserController();
const serverInfoController = new ServerInfoController();

router.get("/status", serverInfoController.status);
router.post("/users", userController.registry);

export { router };