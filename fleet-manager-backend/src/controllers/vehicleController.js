const vehicles = require('../utils/vehicles.db.json')

const getAllVehicles = (req, res) => {
    res.json(vehicles);
  };
  
  // Exportando a função da controller
  module.exports = {
    getAllVehicles,
  };