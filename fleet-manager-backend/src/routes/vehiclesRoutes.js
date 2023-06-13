const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
module.exports = router;

// route for all vehicles
router.get('/allVehicles', vehicleController.getAllVehicles);

//  route for vehicle by id
router.get('/vehicleById/:id', vehicleController.getVehicleById);

// route to create a new vehicle
router.post('/createNewVehicle', vehicleController.createNewVehicle);

// route to update a vehicle by id
router.put('/updateVehicleById', vehicleController.updateVehicleById);

// route to delete a vehicle by id
router.delete('/deleteVehicleById/:id', vehicleController.deleteVehicleById);

// rout to get brands and models
router.get('/brandsAndModels', vehicleController.getBrandsAndModels);



