const Dice = artifacts.require("Dice");
const DiceBattle = artifacts.require("DiceBattle");

module.exports = function (deployer, network) {
  deployer.deploy(DiceBattle, Dice.address);
};
