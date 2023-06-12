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
app.use(bodyParser.json())
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc))