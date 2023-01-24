const express = require('express');
const productsController = require('./controllers/productsController');
const salesController = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// Lista todos os produtos
app.get('/products', productsController.getAll);

// Lista o produto pelo seu ID
app.get('/products/:id', productsController.getById);

// Cadastra produtos novos na api
app.post('/products', productsController.create);

// Lista todas as vendas
app.get('/sales', salesController.getAll);

// Lista a venda pelo seu ID
app.get('/sales/:id', salesController.getById);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;