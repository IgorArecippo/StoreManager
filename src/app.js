const express = require('express');
const productsControler = require('./controllers/productsController');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Lista todos os produtos
app.get('/products', productsControler.getAll);

// Lista o produto pelo seu ID
app.get('/products/:id', productsControler.getById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;