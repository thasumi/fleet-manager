let vehicles = require('../utils/vehicles.db.json')
let brandsAndModels = require('../utils/brands.db.json')
const crypto = require("crypto");
const fs = require('fs');


const getAllVehicles = (req, res) => {
  res.json(vehicles);
};

const getVehicleById = (req, res) => {
  const { id } = req.params;

  // Buscar o veículo pelo ID
  const vehicle = vehicles.find((vehicle) => vehicle.id === id);
  if (!vehicle) {
    return res.status(404).json({ error: 'Veículo não encontrado' });
  }
  res.json(vehicle);
}

const createNewVehicle = (req, res) => {
  const newVehicle = req.body.vehicle;
  const verifyExistingPlate = vehicles.find(entry => entry.plate === newVehicle.plate)
  const verifyExistingChassi = vehicles.find(entry => entry.chassi === newVehicle.chassi)

  if (verifyExistingPlate) {
    return res.status(400).json({ error: 'Veículo com esta placa já existe' });
  } else  if(verifyExistingChassi) {
    return res.status(400).json({ error: 'Veículo com este chassi já existe' });
  }
    newVehicle.id = crypto.randomBytes(16).toString("hex");
    newVehicle.plate = newVehicle.plate.toUpperCase();
    newVehicle.chassi = newVehicle.chassi.toUpperCase();
    console.log(newVehicle);
    vehicles.push(newVehicle);
    fs.writeFileSync('C:/Source/fleet-manager/fleet-manager-backend/src/utils/vehicles.db.json', JSON.stringify(vehicles));
    res.status(200).json({ message: 'Veículo adicionado com sucesso' });
  }

const updateVehicleById = (req, res) => {
  const vehicleIndex = vehicles.findIndex(vehicle => vehicle.id === req.body.vehicle.id);
  if (vehicleIndex >= 0) {
    vehicles[vehicleIndex] = { ...req.body.vehicle };
    vehicles[vehicleIndex].plate = vehicles[vehicleIndex].plate.toUpperCase();
    vehicles[vehicleIndex].chassi = vehicles[vehicleIndex].chassi.toUpperCase();
    fs.writeFileSync('C:/Source/fleet-manager/fleet-manager-backend/src/utils/vehicles.db.json', JSON.stringify(vehicles));
    res.status(200).json({ message: 'Veículo atualizado com sucesso' });
  } else {
    return res.status(404).json({ error: 'Veículo não encontrado' })
  }
}

const deleteVehicleById = (req, res) => {
  const { id } = req.params;
  const initLength = vehicles.length;
  vehicles = vehicles.filter((vehicle => vehicle.id !== id));
  if (initLength === vehicles.length) {
    return res.status(404).json({ error: 'Veículo não encontrado' })
  }
  fs.writeFileSync('C:/Source/fleet-manager/fleet-manager-backend/src/utils/vehicles.db.json', JSON.stringify(vehicles));
  res.status(200).json({ message: 'Veículo removido com sucesso' });
}

const getBrandsAndModels = (req, res) => {
  res.json(brandsAndModels);
}

module.exports = {
  getAllVehicles,
  getVehicleById,
  createNewVehicle,
  deleteVehicleById,
  updateVehicleById,
  getBrandsAndModels
};