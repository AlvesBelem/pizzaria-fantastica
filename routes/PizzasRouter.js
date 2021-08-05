const { response } = require('express');
var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/create', PizzasController.create);
router.get('/pizza/:id', PizzasController.show);
router.get('/busca', PizzasController.busca);
router.post('/pizzas/create', PizzasController.store);




module.exports = router;
