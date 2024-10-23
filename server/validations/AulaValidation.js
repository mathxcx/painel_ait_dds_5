const propriedades = [
    'data',
    'data_hora_inicio',
    'data_hora_fim',
    'turma',
    'instrutor',
    'unidade_curricular',
    'ambiente'
];


export function isNullorEmpty(valor) {
    return valor === null || valor === '' || valor === undefined;
    
}

export function verificaAula(aula) {   
    return propriedades.some(prop=>isNullorEmpty(aula[prop]));

    
}