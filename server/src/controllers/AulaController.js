//Importando funções do AulaModel
import { createAula } from "../models/AulaModel.js";

export async function criarAula(req,res) {
    ///Ao ser chamado o criarAula controller vira no console
    console.log('AulaController criarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Tentando criar

    try {
        const[status,resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }
    
}

export function mostrarAulas(req,res){
    return res.status(200).json(
        [
            {

                "id": "1300",
                "data": "",
                "data_hora_inicio": "",
                "data_hora_fim": "",
                "turma": "EMP-NBM-03",
                "instrutor": "GABRIEL DE ASSIS SPERANDIO",
                "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
                "ambiente": "VTRIA-3-SALA-30045",
                "chave": null
                
                  
            }
        ]
    );
}