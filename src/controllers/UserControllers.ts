import { NOMEM } from 'dns';
import { Request, response, Response } from 'express';
import * as Yup from 'yup';
const Users = require('../users.json');

/**
 * Use o conteúdo da variável `Users` para desenvolver os métodos necessários
 */
const userSchema = Yup().object().shape({
    id: Yup.number().required(),
    nome: Yup.string().required(),
    sobrenome: Yup.string().required(),
    sexo: Yup.string().required(),
    idade: Yup.number().required()

});

export default {
    // o conteúdo do controller vai aqui
   async listar (request:Request, response:Response) {
    const existing = await Users.find()
    return response.status(200).json(existing)
    
   },

   async listarId(request: Request, response: Response) {
    const id = request.body
    const users = Users.find({$or:[{id:id}]})
    if(users){
        return response.status(200).json(users)
    }
    return response.status(400).json('usuario não encontrado');
   },

   async buscarIdade(request: Request, response: Response) {
    const idade = request.body
    const users = Users.find({$or:[{idade:idade}]})
    if(users){
        return response.status(200).json(users)
    }
    return response.status(400).json('usuario não encontrado');
    
   },

   async buscarsexo(request: Request, response: Response) {
    const sexo = request.body
    const users = Users.find({$or:[{sexo:sexo}]})
    if(users){
        return response.status(200).json(users)
    }
    return response.status(400).json('usuario não encontrado');
   }

};
