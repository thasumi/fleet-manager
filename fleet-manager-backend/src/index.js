const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const routes = require('./routes/vehiclesRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');


// Iniciar o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

// Utilizando as rotas configuradas
app.use(bodyParser.json());
app.use(function (req, res, next) { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
 });
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))
