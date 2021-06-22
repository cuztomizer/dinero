const Dinero = artifacts.require("Dinero");

module.exports = function(deployer) {
  deployer.deploy(Dinero);
};
