import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

routes.get('/listar', UserController.listar);
// continuar aqui
routes.get('/usuario/:id', UserController.buscarId)
routes.post('/usuario/idade', UserController.buscarIdade)
routes.post('/usuario/sexo', UserController.buscarSexo)
export default routes;
