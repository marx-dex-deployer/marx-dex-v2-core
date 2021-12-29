const MarXDEXV2Factory = artifacts.require("MarXDEXV2Factory");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(MarXDEXV2Factory, addresses[0]);
};
