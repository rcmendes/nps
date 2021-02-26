"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./database");
const routes_1 = require("./routes");
// import 'reflect-metadata';
const app = express_1.default();
const PORT = 8000;
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});
//# sourceMappingURL=server.js.map