const { response } = require('express')
var express = require('express')
var router = express.Router()
const path = require('path')
const PizzasController = require('../controllers/PizzasController')
const multer = require('multer')
const SalvaVisitadasMiddleware = require('../middlewares/SalvaVisitadasMiddleware')

const armazenamento = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/img/uploads/')
  },
  filename: (req, file, cb) => {
    const { name, ext } = path.parse(file.originalname)
    cb(null, `${name}-${Date.now()}.${ext}`)
  }
})
const upload = multer({ storage: armazenamento })
router.post('/pizzas/create', upload.single('img'), PizzasController.store)

/* GET home page. */
router.get('/', PizzasController.index)
router.get('/pizzas/create', PizzasController.create)
router.get('/pizzas/:id', SalvaVisitadasMiddleware, PizzasController.show)
router.get('/busca', PizzasController.busca)

// router.post('/pizzas/create', PizzasController.store);

module.exports = router
