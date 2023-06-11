const vehicles = require('../utils/vehicles.db.json')

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
  
  // Exportando a função da controller
  module.exports = {
    getAllVehicles,
    getVehicleById
  };