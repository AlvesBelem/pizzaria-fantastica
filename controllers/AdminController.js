const usuarios = require('../database/Usuarios.json')
const fs = require('fs')
const path = require('path')
const bcrypt = require('bcrypt')

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
    const usuario = usuarios.find(
      u => u.email == email && bcrypt.compareSync(senha, u.senha)
    )
    // usuario está definido?
    if (!usuario) {
      return res.redirect('/admin/login?err=1')
    }

    //configurando a session do usuario logado
    req.session.usuario = { nome: usuario.nome, email: usuario.email }

    // dou uma mensagem de sucesso
    return res.redirect('/admin/home')
  },
  showHome: (req, res) => {
    res.render('admin/home')
  }
}
