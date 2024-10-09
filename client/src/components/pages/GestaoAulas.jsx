import { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import { Link, useParams } from 'react-router-dom';

function GestaoAulas(){ 

  //{tipo} faz uso do useParams que é uma variável passada via URL
  //useParams deve ser declarado na rota em app.jsx como exemplo o /gestao_aulas/:tipo

  const {tipo} = useParams();
  const[exibeAlerta, setExibeAlerta] = useState (false);
  const[tipoMensagem,setTipoMensagem] = useState(tipo);
  const[classeMensagem,setClasseMensagem] = useState('');
  const[textoMensagem,setTextoMensagem] = useState('');

  //useEffect é a função pós carregamento
  useEffect(()=>{
    // o if verifica se o tipoMensagem foi definido
    if(tipoMensagem){
      setExibeAlerta(true);
      atualizaMensagem();
      //setTimeout atribui um delay para a msg sumir e atribui '' ao tipoMensagem
      setTimeout(()=>{
        setExibeAlerta(false);
        setTipoMensagem('');

      },5000);
    }
  },[tipoMensagem]);
  // o método delete nesse software é diferente e por isso precisa de uma função específica


  function mensagemDelete(){
    setTipoMensagem('deletada');
  }

  //atualizaMensagem() é uma função que faz uso do switch case que trabalha
  //cada tipo de mensagem de forma separada e atribuir classe e mensagem

  function atualizaMensagem() {
    switch (tipoMensagem){
      case 'cadastrada' :
        setClasseMensagem('alert alert-success');
        setTextoMensagem('Aula Cadastrada');
        break;

      case 'deletada' :
        setClasseMensagem('alert alert-danger');
        setTextoMensagem('Aula Deletada');
        break;

      case 'editada' :
        setClasseMensagem('alert alert-primary');
        setTextoMensagem('Aula Editada');
        break;
        
  
    }
  }

  return (

    <>
    {/*Importando barra de navegação*/ }
    <Navbar />


    
    
    <div className='container'>
      <h1 className='text-center mt-5'>Gestão de Aulas</h1>
      {/*ao chamaer exibeAlerta seguido de && a renderização fica condicional*/}
      {exibeAlerta && <div className={classeMensagem}>{textoMensagem}</div>}
      <div className='col-12 text-end my-2'>
       {/*o Link é um objeto do reac-router-dom que permite navegar sem recarregar a página */} 
      <Link to='/cadastro_aula' className='btn btn-primary ms-auto'>Cadastro Aula</Link>
      </div>
      {/*TabelaAulas é um componente que recebe tipos='edit' que faz com que seja
      editável e também é passada a fnção de mensagemDelete pois nela está
      a função de deletar */}
      <TabelaAulas tipo ='edit' onDeleteSuccess={mensagemDelete}/>
  
    </div>
    
    </>
  )
}

export default GestaoAulas