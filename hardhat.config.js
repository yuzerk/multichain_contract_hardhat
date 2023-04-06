require("@nomicfoundation/hardhat-toolbox");

const address_config = require('./address_config.js')

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  hardhat: {},
  networks: {
      // goerli: {
      //   url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      //   accounts: [GOERLI_PRIVATE_KEY]
      // }
      origin: {
        url: address_config.origin.url,
        chainId: parseInt(address_config.origin.chain_id),
        accounts: [address_config.origin.test_private_key],
        gas: 6000000 // 设置全局 gas limit
      },
      destination : {
        url: address_config.destination.url,
        chainId: parseInt(address_config.destination.chain_id),
        accounts: [address_config.destination.test_private_key],
        gas: 6000000 // 设置全局 gas limit
      }
  }
};
