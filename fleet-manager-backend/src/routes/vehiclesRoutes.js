const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const swagger = require('../swagger');
module.exports = router;

// route for all vehicles
router.get('/allVehicles', vehicleController.getAllVehicles);

// route for vehicle by id
//router.get('/vehicleById/:id', vehicleController.getVehicleById);

// Rota para criar um novo usuário
//router.post('/createVehicle', vehicleController.createVehicle);

// Rota para atualizar um usuário pelo ID
//router.put('/updateVehicleById/:id', vehicleController.upodateVehicle);

// Rota para excluir um usuário pelo ID
//router.delete('/deleteVehicleById/:id', vehicleController.deleteVehicle);

router.use('/api-docs', swagger);


