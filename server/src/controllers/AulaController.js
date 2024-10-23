//Importando funções do AulaModel
import { createAula, readAula, updateAula, deleteAula, showOneAula} from "../models/AulaModel.js";
import { isNullorEmpty, verificaAula } from "../../validations/AulaValidation.js";


export async function criarAula(req, res) {

    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController cirarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);

    if(verificaAula(aula)){
        res.status(400).json({message:'Todas as propriedades devem ser criadas'});
    }else{

   //Tentando criar aula
    try {
        const [status, resposta] = await createAula(aula)
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
  } 
}

export async function mostrarAulas(req, res) {

    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController mostrarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Tentando mostrar aula
    try {
        const [status, resposta] = await readAula(aula);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function atualizarAula(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController atualizarAula');


    //Criando constante com a requisição
    const aula = req.body;
    const { id } = req.params;
    if(verificaAula(aula) || isNullorEmpty(id)){
        res.status(400).json({message:'Todas propriedades devem ser preenchidas'});

    }else{

      //Tentando atualizar aula
      try {
        const [status, resposta] = await updateAula(aula, id);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    } 
    
    
  }   
    
}

export async function excluirAula(req,res) {
   //Ao ser chamado o criarAula controller virá no console
   console.log('AulaController excluirAula');  

    //Criando constante com a requisição
    const { id } = req.params;

    if (isNullorEmpty(id)){
        res.status(400).json({message: 'O id deve ser informado'});

    }else {
       //Tentando deletar aula
       try {
        const [status, resposta] = await deleteAula(id);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
  } 
}

    
     

export async function mostrarUmaAula(req,res) {
    
    console.log('AulaController mostrarUmaAula')


    const { id } = req.params


    try {
        const[status,resposta] = await showOneAula(id);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}