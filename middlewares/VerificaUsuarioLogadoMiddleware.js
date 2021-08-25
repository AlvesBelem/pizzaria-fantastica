module.exports = (req, res, next) => {
  if (req.session.usuario) {
    next()
  } else {
    return res.redirect('/admin/login')
  }
}
