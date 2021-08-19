const usuarios = require('../database/Usuarios.json')
const fs = require('fs')
const path = require('path')

module.exports = {
  showLogin: (req, res) => {
    res.render('admin/login')
  },
  login: (req, res) => {
    // capiturar email e senha do input enviado pelo cliente
    //modelo desconstruido
    const { email, senha } = req.body
    // sem desconstrução
    // const email = req.body.email
    // const senha = req.body.senha

    // buscar no array de usuarios  que tenha email igual ao funcionário
    const usuario = usuarios.find(u => u.email == email && u.senha == senha)
    // usuario está definido?
    if (!usuario) {
      return res.redirect('/admin/login?err=1')
    }
    // dou uma mensagem de sucesso
    return res.send('Você é o bichão mesmo!')
  }
}
