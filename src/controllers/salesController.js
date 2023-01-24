const salesService = require('../services/salesService');

const getAll = async (req, res) => {
  const sales = await salesService.getAll();
  res.status(200).json(sales.message[0]);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.getById(id);
  const { message } = sale;
  if (sale.type) return res.status(404).json({ message });
  return res.status(200).json(sale.message);
};

module.exports = {
  getAll,
  getById,
};