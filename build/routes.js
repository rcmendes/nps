"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ServerInfoController_1 = require("./controllers/ServerInfoController");
const SurveyController_1 = require("./controllers/SurveyController");
const UserController_1 = require("./controllers/UserController");
const router = express_1.Router();
exports.router = router;
const userController = new UserController_1.UserController();
const surveyController = new SurveyController_1.SurveyController();
const serverInfoController = new ServerInfoController_1.ServerInfoController();
router.get("/status", serverInfoController.status);
router.post("/users", userController.registry);
router.post("/surveys", surveyController.create);
//# sourceMappingURL=routes.js.map