const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { products } = require('../productsMock');
const productsController = require('../../../src/controllers/productsController')
const productsService = require('../../../src/services/productsService');
chai.use(sinonChai);

describe('Testing products Controller', function () {
  // beforeEach(() => {
  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  // })

  afterEach(() => {
    sinon.restore();
  })

  it('Should return all products', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAll').resolves(products);

    await productsController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(products);
  }) 

  it('Return product by id', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(products);

    sinon.stub(productsService, 'getById').resolves({ type: null, message: products[0] })
    
    await productsController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithExactly(products[0]);


  })
})