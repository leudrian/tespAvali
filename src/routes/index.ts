import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

<<<<<<< HEAD
routes.get('/listar', UserController.listar);
// continuar aqui
routes.get('/usuario/:id', UserController.buscarId)
routes.post('/usuario/idade', UserController.buscarIdade)
routes.post('/usuario/sexo', UserController.buscarSexo)
=======
routes.get('/list', UserControllers.listar);
// continuar aqui
routes.get('/usuario/:id', UserControllers.listarId)
routes.post('/usuario/idade', UserControllers.buscarIdade)
routes.post('/usuario/sexo', UserControllers.buscarsexo)
>>>>>>> 0a1f7c40442e60978352722c43fb95f6aecf50c2
export default routes;
