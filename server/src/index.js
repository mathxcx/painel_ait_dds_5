//Importando express
import express from 'express';

//Importando cors
import cors from 'cors';

//Importando funções (metodos do controller)
import { mostrarAulas,criarAula } from './controllers/AulaController.js';

//Chamandp função express
const app = express();
const porta = 5000;

//Habilitando cors
app.use(cors());

//Habilitando JSON
app.use(express.json());

//Rota padrão para teste de API
app.get('/',(req,res)=>{
    res.send('<h1>Teste de API funcionando<h1>')
});

//Rotas de aulas
app.post('/aulas',criarAula);
app.get('/aulas', mostrarAulas);

//Inicializando API e exibindo mensagens no console com a porta
app.listen(porta,()=>{
    console.log(`API Rodando na porta ${porta}`)
});
