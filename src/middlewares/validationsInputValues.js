const { idSchema, nameSchema } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 404, message: 'Product not found' };
  return { type: null, message: '' };
};

const validateName = (name) => {
  const { error } = nameSchema.validate(name);
  if (error) return { type: 422, message: '"name" length must be at least 5 characters long' };
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateName,
};