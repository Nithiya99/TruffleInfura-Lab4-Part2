var DiceArtifact = artifacts.require("./Dice.sol");
var DiceMarketArtifact = artifacts.require("./DiceMarket.sol");

contract("Test Sequence Contract", (accounts) => {
  it("Should deploy dice contract properly", async () => {
    const diceContract = await DiceArtifact.deployed();
    console.log(diceContract.address);
    assert(diceContract.address != "");
  });

  it("Should deploy dice market contract properly", async () => {
    const diceMarketContract = await DiceMarketArtifact.deployed();
    console.log(diceMarketContract.address);
    assert(diceMarketContract.address != "");
  });

  it("Should create a new dice", async () => {
    const diceContract = await DiceArtifact.deployed();
    await diceContract.add(9, 1, {
      from: accounts[0],
      value: 20000000000000000,
    });
    const result = await diceContract.numDices();
    console.log("Number of dices: ", result.toNumber());
    assert(diceContract != "");
  });

  it("Should list dice in market", async () => {
    const diceMarketContract = await DiceMarketArtifact.deployed();
    await diceMarketContract.list(0, 1);
    result = await diceMarketContract.checkPrice(0);
    console.log(result.toNumber());
    assert(result != 0);
  });

  it("User 2 buy dice and should ownership change", async () => {
    const diceMarketContract = await DiceMarketArtifact.deployed();
    const diceContract = await DiceArtifact.deployed();
    await diceMarketContract.buy(0, {
      from: accounts[1],
      value: 50000000000000000,
    });
    result = await diceContract.getOwner(0);
    console.log("Ownership changed ID: ", result);
    assert(result === accounts[1]);
  });
});
