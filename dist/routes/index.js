"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
const routes = express_1.default.Router();
routes.get('/list', UserControllers_1.default.index);
// continuar aqui
routes.get('/usuario/:id', User.Controller.listarId)
routes.post('/usuario/idade', UserController.BuscarIdade)
routes.post('/usuario/sexo', UserController.Buscarsexo)

exports.default = routes;
