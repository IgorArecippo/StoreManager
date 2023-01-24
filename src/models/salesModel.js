const camelize = require('camelize');
const { connection } = require('./connection');

const getAll = async () => {
  const sales = await connection.execute(
    'SELECT sale_id, date, product_id as productId, quantity'
    + ' FROM StoreManager.sales_products AS products'
    + ' INNER JOIN StoreManager.sales AS sales ON products.sale_id = sales.id',
  );
  return camelize(sales);
};

const getById = async (saleId) => {
  const [sale] = await connection.execute(
    'SELECT date, product_id as productId, quantity'
    + ' FROM StoreManager.sales_products AS products'
    + ' INNER JOIN StoreManager.sales AS sales ON products.sale_id = sales.id'
    + ' WHERE products.sale_id = ? ', [saleId],
  );
  return sale;
};

module.exports = {
  getAll,
  getById,
};