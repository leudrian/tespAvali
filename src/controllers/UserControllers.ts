import { NOMEM } from 'dns';
import { Request, response, Response } from 'express';
<<<<<<< HEAD
import { updateImportEqualsDeclaration } from 'typescript';
=======
>>>>>>> 0a1f7c40442e60978352722c43fb95f6aecf50c2
import * as Yup from 'yup';
const Users = require('../users.json');

/**
 * Use o conteúdo da variável `Users` para desenvolver os métodos necessários
 */
<<<<<<< HEAD
interface Usuario{
    id: number,
    nome: string,
    sobrenome: string,
    sexo: string;
    idade: number;

};

export default {
   /* // o conteúdo do controller vai aqui
=======
const userSchema = Yup().object().shape({
    id: Yup.number().required(),
    nome: Yup.string().required(),
    sobrenome: Yup.string().required(),
    sexo: Yup.string().required(),
    idade: Yup.number().required()

});

export default {
    // o conteúdo do controller vai aqui
>>>>>>> 0a1f7c40442e60978352722c43fb95f6aecf50c2
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

<<<<<<< HEAD
   async buscarSexo(request: Request, response: Response) {
=======
   async buscarsexo(request: Request, response: Response) {
>>>>>>> 0a1f7c40442e60978352722c43fb95f6aecf50c2
    const sexo = request.body
    const users = Users.find({$or:[{sexo:sexo}]})
    if(users){
        return response.status(200).json(users)
    }
    return response.status(400).json('usuario não encontrado');
<<<<<<< HEAD
   }*/
   listar(request: Request, response: Response) {
    return response.status(200).json(Users);
   },
   buscarId(request: Request, response: Response){
    const {id} = request.params;
    const resultado = Users.find((usuario: Usuario) => usuario.id == parseInt(id));
    return response.status(200).json(resultado);
   },
   buscarIdade(request: Request, response: Response){
    const {idade} = request.body;;
    const resultado = Users.filter((usuario: Usuario) => usuario.idade > idade);
    if (resultado){
        return response.status(200).json(resultado);
    }
    return response.status(400).json({message:'Idade com usuario não encontrado'})
   },
   buscarSexo(request: Request, response: Response){
    const {sexo} = request.body;
    const resultado = Users.filter((usuario: Usuario) => usuario.id == sexo);
    if (resultado){
        return response.status(200).json(resultado);
    }
    return response.status(400).json({message:'Sexo do usuario não encontrado'})
   }


=======
   }

>>>>>>> 0a1f7c40442e60978352722c43fb95f6aecf50c2
};
