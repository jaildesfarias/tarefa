
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let dados = {
  terreste1: null,
  gravidade2: null,
  medieval3: null,
  safari4: null,
  paraquedas5: null,
  mergulho6: null
};

app.post('/dados', (req, res) => {
  const { terreste1, gravidade2, medieval3, safari4, paraquedas5, mergulho6 } = req.body;
  
  dados.terreste1 = terreste1;
  dados.gravidade2 = gravidade2;
  dados.medieval3 = medieval3;
  dados.safari4 = safari4;
  dados.paraquedas5 = paraquedas5;
  dados.mergulho6 = mergulho6;
  
  console.log('Dados recebidos:', dados);
  
  res.send('Dados recebidos com sucesso!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
