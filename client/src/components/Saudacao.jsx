import { useEffect, useState } from "react";

//Criando função Saudacao
function Saudacao(){
    //Criando estado da saudacao
const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');

//Chamando função de saudação e definindo um intervalo de 1 segundo
useEffect(()=>{
    atualizaSaudacao();
    const intervalo = setInterval(atualizaSaudacao,1000);
    return()=>{
        clearInterval(intervalo);
    }

},[])
 
//Criando texto da saudação do cabeçalho
function atualizaSaudacao(){

    //Declarando objeto do tipo DATE
    const agora = new Date();

    //Obtendo hora em inteiro exemplo 07:35:00 retorna 7
    const hora = agora.getHours();

    //Obtendo dia da semana em inteiro iniciando em domingo que retorna 0 e sabado retorna 6
    const dia = agora.getDay();
 
    //Declarando variavel do texto da saudacao
    let textoSaudacao = '';


    //Definindo array com os dias da semana
    const diaSemana = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'

    ];

    //Adicionando o dia da semana e o textoSaudacao
    textoSaudacao += diaSemana[dia];

    //Adicionando saudação ao textoSaudacao
    if(hora>=18){
        textoSaudacao += ' Boa Noite';

    }else if(hora>=12){
        textoSaudacao += ' Boa Tarde';
    }else{
        textoSaudacao += ' Bom Dia';

    }
    //Chamando função de atribuição
    setSaudacaoPeriodo(textoSaudacao);  
}


    return(
        <div>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;