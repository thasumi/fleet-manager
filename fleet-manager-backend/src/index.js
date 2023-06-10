const express = require('express');
const app = express();
const routes = require('./routes/vehiclesRoutes');


// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

// Utilizando as rotas configuradas
app.use(routes);