const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsModel = require('../../../src/models/productsModel');
const { connection } = require('../../../src/models/connection');
const products = require('../productsMock');

describe('Testing products Model', function () {
  afterEach(() => {
    sinon.restore();
  })

  it('Return all products', async function() {
    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productsModel.getAll();
    
    expect(result).to.be.deep.equal(products);
  })
  it('Return product by id', async function() {
    sinon.stub(connection, 'execute').resolves([[products[1]]]);

    const result = await productsModel.getById(2);

    expect(result).to.be.deep.equal(products[1]);
  })
})
