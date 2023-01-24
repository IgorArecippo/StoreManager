const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return { message: sales };
};

const getById = async (saleId) => {
  const sale = await salesModel.getById(saleId);
  if (sale.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: sale };
};

module.exports = {
  getAll,
  getById,
};