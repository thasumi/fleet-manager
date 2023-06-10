const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const swagger = require('../swagger');
module.exports = router;

// Rota para obter todos os usuários
router.get('/allVehicles', vehicleController.getAllVehicles);

// Rota para obter um usuário pelo ID
//router.get('/vehicleById/:id', vehicleController.getVehicleById);

// Rota para criar um novo usuário
//router.post('/createVehicle', vehicleController.createVehicle);

// Rota para atualizar um usuário pelo ID
//router.put('/updateVehicleById/:id', vehicleController.upodateVehicle);

// Rota para excluir um usuário pelo ID
//router.delete('/deleteVehicleById/:id', vehicleController.deleteVehicle);

router.use('/api-docs', swagger);


