const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const productsModel = require('../../../src/models/productsModel');
const { products } = require('../productsMock');
const productsService = require('../../../src/services/productsService');

describe('Testing products Services', function() {
  afterEach(() => {
    sinon.restore();
  })

  it('Returns all products', async function() {
    sinon.stub(productsModel, 'getAll').resolves(products);

    const results = await productsService.getAll();

    expect(results).to.be.deep.equal(products);
  })

  it('Return product by id', async function () {
    productId = 3
    sinon.stub(productsModel, 'getById').resolves(products[2]);

    const results = await productsService.getById(productId);
    // console.log(results)
    expect(results.message).to.be.equal(products[2]);
    // console.log(products)
  })
})