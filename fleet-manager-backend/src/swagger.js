const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  info: {
    title: 'fleet-manager',
    version: '1.0.0',
    description: 'Descrição do seu projeto'
  },
  basePath: '/' // Ajuste o caminho base da sua API, se necessário
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'] // Caminho para seus arquivos de rotas da API
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = (index) => {
  index.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
