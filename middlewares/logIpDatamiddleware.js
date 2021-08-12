const fs = require ('fs');
const path = require('path');
const logIpHoraMiddleware = (req, res, next) => {

  linha = `${req.ip}| ${(new Date()).toISOString()} | ${req.url}\n`
  //puxando ip da requisição
  // req.ip
  // data da requisição
  // (newDate()).toIsoString();
  // chamando a rota
  // req.url

  fs.appendFileSync(path.join(__dirname,"../logs/log.txt"), linha);

  next();
}

module.exports = logIpHoraMiddleware;