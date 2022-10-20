import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

routes.get('/list', UserControllers.listar);
// continuar aqui
routes.get('/usuario/:id', UserControllers.listarId)
routes.post('/usuario/idade', UserControllers.buscarIdade)
routes.post('/usuario/sexo', UserControllers.buscarsexo)
export default routes;
