const MarXDEXV2Factory = artifacts.require("MarXDEXV2Factory");
const MarXDEXV2Pair = artifacts.require("MarXDEXV2Pair");
const IERC20 = artifacts.require("IERC20");

module.exports = async function (callback) {
  const network = config.network
  
  if (network != 'evmos') {
    throw new Error('No MarX DEX contracts on this network!')
  }
  
  try {
    const factoryAddress = '0x49c5935d26E9D1D36e27fe16E6f0815260A26E10'
    
    console.log("Test MarXDEXV2Factory")
    let factoryContract = await MarXDEXV2Factory.at(factoryAddress)
    
    let pairAddress
    let pair
    let token0Address
    let token1Address
    let token0
    let token1
    
    for (let i = 0; i < await factoryContract.allPairsLength(); i++) {
      pairAddress = await factoryContract.allPairs(i)
      pair = await MarXDEXV2Pair.at(pairAddress)
      
      token0Address = await pair.token0()
      token1Address = await pair.token1()
      
      token0 = await IERC20.at(token0Address)
      token1 = await IERC20.at(token1Address)
      
      console.log(i, ' MarXDEXV2Pair:', pairAddress)
      console.log('token0:', token0Address, '(' + await token0.name() + ')')
      console.log('token1:', token1Address, '(' + await token1.name() + ')')
      console.log('')
    }
    
//     console.log(factoryContract)
  }
  catch(error) {
    console.log(error)
  }
  
  callback(`Complete!`)
};
