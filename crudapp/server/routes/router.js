const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const clientController = require('../controller/clientController');
const productController = require('../controller/productController');
const saleController = require('../controller/saleController');
const supplierController = require('../controller/supplierController');


/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/employee', services.homeRoutes);

route.get('/', services.homeRoute);

route.get('/client', services.homeClientRoute);

route.get('/product', services.homeProductRoute);

route.get('/supplier', services.homeSupplierRoute);

route.get('/sale', services.homeSaleRoute);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

route.get('/add-client', services.add_client)

route.get('/add-product', services.add_product)

route.get('/add-sale', services.add_sale)

route.get('/add-supplier', services.add_supplier)


/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

route.get('/update-product', services.update_product)

route.get('/update-sale', services.update_sale)

route.get('/update-supplier', services.update_supplier)

/**
 *  @description for update clients
 *  @method GET /update-client
 */

route.get('/update-client', services.update_client)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.post('/api/client', clientController.create);
route.get('/api/client', clientController.find);
route.put('/api/client/:id', clientController.update);
route.delete('/api/client/:id', clientController.delete);

route.post('/api/product', productController.create);
route.get('/api/product', productController.find);
route.put('/api/product/:id', productController.update);
route.delete('/api/product/:id', productController.delete);

route.post('/api/sale', saleController.create);
route.get('/api/sale', saleController.find);
route.put('/api/sale/:id', saleController.update);
route.delete('/api/sale/:id', saleController.delete);

route.post('/api/supplier', supplierController.create);
route.get('/api/supplier', supplierController.find);
route.put('/api/supplier/:id', supplierController.update);
route.delete('/api/supplier/:id', supplierController.delete);


module.exports = route