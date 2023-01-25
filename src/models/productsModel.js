const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
};

const getById = async (productId) => {
  console.log(productId);
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  console.log(product);
  return product;
};

const create = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [newProduct] = await connection.execute(query, [name]);
  return newProduct.insertId;
};

const update = async (productId, name) => {
  console.log(productId);
  console.log(name);
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  const [result] = await connection.execute(query, [productId, name]);
  return result.affectedRows;
};

const del = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  const [deleted] = await connection.execute(query, [id]);
  return deleted.affectedRows;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
};