//Importando funções do AulaModel
import { createAula, showAulas } from "../models/AulaModel.js";


export async function criarAula(req,res) {
    ///Ao ser chamado o criarAula controller vira no console
    console.log('AulaController criarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);

    //Tentando criar aula

    try {
        const[status,resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }
    
}

export async function mostrarAulas(req,res){
   console.log('AulaController mostrarAula');
   const aula = req.body;

   //Exibindo corpo da requisição
   console.log(aula);

   try {
    const [status,resposta] = await showAulas(aula);
    res.status(status).json(resposta);    
   } catch (error) {
    console.log(error);
    res.status(500).json(error);
    
   }
}