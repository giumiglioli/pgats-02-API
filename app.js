const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const transferController = require('./controllers/transferController');

const app = express();
app.use(bodyParser.json());

// Rotas de autenticação
app.post('/login', authController.login);
app.post('/register', authController.register);

// Rotas de usuários
app.get('/users', userController.getAllUsers);
app.post('/users/favorecido', userController.addFavorecido);

// Rotas de transferências
app.post('/transfer', transferController.transfer);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;