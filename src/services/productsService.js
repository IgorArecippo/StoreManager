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
  // console.log(product);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: null, message: product };
};

const create = async ({ name }) => {
  if (!name) return { type: 400, message: '"name" is required' };
  const id = await productsModel.create({ name });
  const newProduct = await productsModel.getById(id);
  const error = schema.validateName(name);
  if (error.type) return error;

  return { type: 201, message: newProduct };
};

module.exports = {
  getAll,
  getById,
  create,
};