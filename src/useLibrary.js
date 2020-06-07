const DeGiro = require("./");

const degiro = DeGiro.create();
console.log(degiro);

degiro
  .login()
  .then(degiro.getPortfolio)
  .then((res) => res.portfolio.map((a) => a.id))
  .then(degiro.getProductsByIds)
  .then(console.log)
  .catch(console.error);
