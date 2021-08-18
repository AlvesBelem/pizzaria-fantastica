module.exports = (req, res, next) => {
  console.log('pizza de id' + req.params.id)

  next()
}
