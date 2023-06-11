const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
module.exports = router;

// route for all vehicles
router.get('/allVehicles', vehicleController.getAllVehicles);

//  route for vehicle by id
router.get('/vehicleById/:id', vehicleController.getVehicleById);

// Rota para criar um novo usuário
router.post('/createNewVehicle', vehicleController.createNewVehicle);

// Rota para atualizar um usuário pelo ID
router.put('/updateVehicleById', vehicleController.updateVehicleById);

// Rota para excluir um usuário pelo ID
router.delete('/deleteVehicleById/:id', vehicleController.deleteVehicleById);


