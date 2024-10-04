import { useEffect, useState } from "react";
import AbreviaData from "./AbreviaData";
import AbreviaAmbiente from "./AbreviaAmbiente";
import AbreviaInstrutor from "./AbreviaInstrutor";
import AbreviaUC from "./AbreviaUC";
import styles from './TabelaAulas.module.css';

function TabelaAulas(tipo) {
    const [aulas,setAulas] = useState([]);

    useEffect(()=>{
        baixarAulas();

    },[])

  async function baixarAulas (){
    try {
        const resposta = await fetch('http://localhost:5000/aulas',{
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json'
            }
        });
        
        if(!resposta){
            throw new Error('Erro ao buscar aulas');
        }
        const consulta = await resposta.json();
        setAulas(consulta);
    } catch (error) {
        console.log('Erro ao consultar aulas', error)
        
    }

  }
  return (
    <div className={`${styles.aulas} ${tipo ==='edit' ? styles.edit : ''}`}>
        <table className={styles.tabelaAulas}>
            <thead>
                <tr>
                <th>Início</th>
                <th>Fim</th>
                <th>Turma</th>
                <th>Instrutor</th>
                <th>Unidade Curricular</th>
                <th>Ambiente</th>
                {tipo === 'edit' && <th>Ações</th>}
                </tr>
            </thead>
            <tbody>
                {aulas.map((aula)=>(

                    <tr key = {aula.id}>
                        <td><AbreviaData data={aula.data_hora_inicio} /></td>
                        <td><AbreviaData data={aula.data_hora_fim}/></td>
                        <td>{aula.turma}</td>
                        <td><AbreviaInstrutor instrutor={aula.instrutor}/></td>
                        {/* <td><AbreviaUC unidade_curricular={aula.unidade_curricular}/></td> */}
                        <td>{aula.unidade_curricular}</td>
                        <td><AbreviaAmbiente ambiente={aula.ambiente}/></td>
                        {tipo === 'edit' &&
                             <td>
                                <button className="btn btn-warning">Editar</button>
                                <button className="btn btn-danger ms-2">Deletar</button>
                        
                            
                            -
                            
                            </td>}
                        
                    </tr>

                ))}
                
                
               
                
            </tbody>


        </table>


    </div>
  )
}

export default TabelaAulas