const productsService = require('../services/productsService');

const getAll = async (req, res) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const create = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const { message, type } = await productsService.create({ name });
  if (type === 400 || type === 422) return res.status(type).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  getAll,
  getById,
  create,
};