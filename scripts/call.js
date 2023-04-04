const hre = require("hardhat");
const fs = require("fs");

const config = require("../address_config.js")

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
    await contract.setChainConfig(config.origin.chain_id, config.origin.chain_name, config.origin.router_address, 1, 0, "");
    const chainConfig = await contract.getChainConfig(config.origin.chain_id);
    if (chainConfig.RouterContract != config.origin.router_address) {
        console.log('RouterConfigSet error, onchain data do not equal to config file data, please check config file or onchain data')
    }

    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });