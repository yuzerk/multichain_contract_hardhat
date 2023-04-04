const hre = require("hardhat");
const fs = require("fs");

const config = require("../address_config.js")

const zero_address = '0x0000000000000000000000000000000000000000'

async function main() {
    
    RouterConfigSet();
}

async function RouterConfigSet() {
    const provider = new hre.ethers.providers.JsonRpcProvider(config.origin.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/RouterConfig.sol/RouterConfig.json")).abi;
    const contract = new hre.ethers.Contract(
      config.origin.config_address,
      abi,
      provider.getSigner()
    );
    // 配置chain
    // await contract.setChainConfig(config.origin.chain_id, config.origin.chain_name, config.origin.router_address, 1, 0, "");
    // const chainConfig = await contract.getChainConfig(config.origin.chain_id);
    // if (chainConfig.RouterContract != config.origin.router_address) {
    //     console.log('RouterConfigSet setChainConfig error, chainConfig.RouterContract is ', chainConfig.RouterContract, 'config.origin.router_address', config.origin.router_address)
    // }

    //配置token
    await contract.setTokenConfig(config.origin.token_name,config.origin.chain_id, config.origin.token_address, 18, 1, zero_address, "");
    const tokenConfig = await contract.getTokenConfig(config.origin.token_name, config.origin.chain_id);
    console.log(tokenConfig);
    if (tokenConfig.ContractAddress != config.origin.token_address) {
        console.log("RouterConfigSet setTokenConfig error");
    }

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });