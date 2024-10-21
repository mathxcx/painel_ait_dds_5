
function FormatarData(data) {

  const objetoData = new(data)
  const ano = objetoData.getFullYear();
  let mes = objetoData.getMonth()+1;
  let dia = objetoData.getDate();

  if(mes.lenght<2){
    mes = '0'+mes;
  }

  if(dia.lenght<2){
    dia = '0'+dia;
  }

  const dataCompleta = [ano,mes,dia].join('-');
  return dataCompleta;
  
}

export default FormatarData