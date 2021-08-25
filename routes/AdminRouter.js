var express = require('express')
var router = express.Router()
const AdminController = require('../controllers/AdminController')
const VerificaUsuarioLogadoMiddleware = require('../middlewares/VerificaUsuarioLogadoMiddleware')

router.get('/admin/login', AdminController.showLogin)
router.post('/admin/login', AdminController.login)
router.get(
  '/admin/home',
  VerificaUsuarioLogadoMiddleware,
  AdminController.showHome
)

module.exports = router
