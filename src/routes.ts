import { Router } from "express";
import { ServerInfoController } from "./controllers/ServerInfoController";
import { SurveyController } from "./controllers/SurveyController";
import { UserController } from "./controllers/UserController"


const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();
const serverInfoController = new ServerInfoController();

router.get("/status", serverInfoController.status);
router.post("/users", userController.registry);
router.get("/users", userController.listAll);
router.post("/surveys", surveyController.create);
router.get("/surveys", surveyController.listAll);

export { router };