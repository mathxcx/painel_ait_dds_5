

function AbreviaAmbiente (props) {
    let salas = new String(props.ambiente).split('-');
    salas.splice(0,2);
    salas = salas.join('-')    
    return salas;
}


export default AbreviaAmbiente;