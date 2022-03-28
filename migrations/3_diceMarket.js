const Dice = artifacts.require("Dice");
const DiceMarket = artifacts.require("DiceMarket");

module.exports = function (deployer, network) {
  deployer.deploy(DiceMarket, Dice.address, 1);
};
