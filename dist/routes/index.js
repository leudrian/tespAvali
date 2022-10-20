"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
routes.get('/list', UserControllers.listar);
// continuar aqui
routes.get('/usuario/:id', UserControllers.listarId);
routes.post('/usuario/idade', UserControllers.buscarIdade);
routes.post('/usuario/sexo', UserControllers.buscarsexo);
exports.default = routes;
