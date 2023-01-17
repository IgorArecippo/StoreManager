const productsModel = require('../models/productsModel');
const schema = require('../middlewares/validationsInputValues');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getById = async (productId) => {
  const error = schema.validateId(productId);
  if (error.type) return error;

  const product = await productsModel.getById(productId);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getAll,
  getById,
};