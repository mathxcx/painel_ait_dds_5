import mysql from 'mysql2/promise'
import db  from '../conexao.js'



export async function createAula(aula){

//Criando conexao para o banco de dados usando configurações de 'db'
const conexao = mysql.createPool(db);

//Ao ser acionado o método createAula retorna na tela
console.log('Entrando no Model Aula')

    //Criando string no sql

    const sql = `INSERT INTO aulas(
    data,
    data_hora_inicio,
    data_hora_fim,
    turma,
    instrutor,
    unidade_curricular,
    ambiente
    )
    VALUES(?,?,?,?,?,?,?)`;

// Definindo parametros para inserir no SQL
    const params = [
    aula.data,
    aula.data_hora_inicio,
    aula.data_hora_fim,
    aula.turma,
    aula.instrutor,
    aula.unidade_curricular,
    aula.ambiente

    ];
//Executando query no banco 
   try {
     const [retorno] = await conexao.query(sql,params);
     console.log('Aula Cadastrada');
     return [201,retorno];
   } catch (error) {
      console.log(error);
      return [500,error];
   }
    

}

export async function showAulas(aula){

  //Criando conexao para o banco de dados usando configurações de 'db'
  const conexao = mysql.createPool(db);
  
  //Ao ser acionado o método createAula retorna na tela
  console.log('Entrando no Model Aula')
  
      //Criando string no sql
  
  const sql = `SELECT * FROM aulas`;
  
  // Definindo parametros para inserir no SQL
      const params = [
      aula.data,
      aula.data_hora_inicio,
      aula.data_hora_fim,
      aula.turma,
      aula.instrutor,
      aula.unidade_curricular,
      aula.ambiente
  
      ];
  //Executando query no banco 
     try {
       const [retorno] = await conexao.query(sql,params);
       console.log('Aula exibida');
       return[200,retorno];
     } catch (error) {
        console.log(error);
        return [502,error];
     }
      
  
  }
  

