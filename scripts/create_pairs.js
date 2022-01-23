const MarXDEXV2Factory = artifacts.require("MarXDEXV2Factory");

module.exports = async function (callback) {
  const network = config.network
  
  if (network != 'evmos') {
    throw new Error('No MarX DEX contracts on this network!')
  }
  
  try {
    const factoryAddress = '0x49c5935d26E9D1D36e27fe16E6f0815260A26E10'
    
    console.log("Test MarXDEXV2Factory")
    let factoryContract = await MarXDEXV2Factory.at(factoryAddress)
    
    const wethAddress = '0x2a55419038102d9B671f031A7B4Fc99F1582d771'
    const usdcAddress = '0xdcB434b0C8c8c7C6b6b61990B2A87C2c3B1B1F83'
    const daiAddress = '0x60154b6844ED3B8CbD4636244bdE43Bb06a0e68D'
    const marxAddress = '0xD05958358Cf3F211E5419C6Df2B95d44FFE712bD'
    
    console.log("Create pairs")
    await factoryContract.createPair(wethAddress, daiAddress)
    await factoryContract.createPair(wethAddress, usdcAddress)
    await factoryContract.createPair(wethAddress, marxAddress)
  }
  catch(error) {
    console.log(error)
  }
  
  callback(`Complete!`)
};
