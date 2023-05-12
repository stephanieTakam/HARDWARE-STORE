const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('employee/index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.homeRoute = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/')
        .then(
            res.render('index')
        )
        .catch(err =>{
            res.send(err);
        })    
}

exports.homeProductRoute = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/product')
        .then(function(response){
            res.render('product/index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })   
}

exports.homeClientRoute = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/client')
        .then(function(response){
            res.render('client/index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })  
}

exports.homeSupplierRoute = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/supplier')
        .then(function(response){
            res.render('supplier/index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })    
}

exports.homeSaleRoute = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/sale')
        .then(function(response){
            res.render('sale/index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })    
}

exports.add_user = (req, res) =>{
    res.render('employee/add_user');
}

exports.add_client = (req, res) =>{
    res.render('client/add_client');
}

exports.add_product = (req, res) =>{
    res.render('product/add_product');
}

exports.add_sale = (req, res) =>{
    res.render('sale/add_sale');
}

exports.add_supplier = (req, res) =>{
    res.render('supplier/add_supplier');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("employee/update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_supplier = (req, res) =>{
    axios.get('http://localhost:3000/api/supplier', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("supplier/update_supplier", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_sale = (req, res) =>{
    axios.get('http://localhost:3000/api/sale', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("sale/update_sale", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_client = (req, res) =>{
    axios.get('http://localhost:3000/api/client', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("client/update_client", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.update_product = (req, res) =>{
    axios.get('http://localhost:3000/api/product', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("product/update_product", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}