const express = require ('express');        //importando as funcionalidades do express
const routes = require('./routes');         //Informar o ./ para informar que é um arquivo e não um pacote como o express
const cors = require('cors');


const app = express();         
             //criação de uma variável que irá armazenar a nossa aplicação
app.use(cors());
app.use(express.json());                    //Convertendo o json em um objeto do javascript
app.use(routes);

app.listen(3333);                           //Mandando a variável APP ouvir a porta 3333



 