// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const address_config = require("../address_config.js")

const zero_address = '0x0000000000000000000000000000000000000000'

async function main() {
  //goerli
  //checkBalance(address_config.goerli);
  //deployAnyErc20(address_config.goerli);
  //deployAnyRouter(address_config.goerli);

  //origin
  deployAnyErc20(address_config.origin);
  //deployAnyRouter(address_config.origin);
  //deployRouterConfig();

  //destination
  //deployAnyErc20(address_config.destination);
  //deployAnyRouter(address_config.destination);
}

async function deployAnyErc20(chain) {
  const contractName = 'AnyswapV6ERC20';
  const MyToken1 = await hre.ethers.getContractFactory(contractName);
  const token1 = await MyToken1.deploy(chain.token_name, chain.token_symbol, 6, zero_address, chain.account_address);
  await token1.deployed();
  console.log("Token address:", token1.address);
}

async function deployAnyRouter(chain) {
  const contractName = 'AnyswapV6Router'
  const AnyRouter = await hre.ethers.getContractFactory(contractName);
  const router = await AnyRouter.deploy(zero_address, zero_address, chain.account_address, {gasLimit: 10000000, gasPrice: 20000000000});
  await router.deployed();
  console.log("router address: ", router.address)
}

async function deployRouterConfig() {
  const contractName = 'RouterConfig'
  const AnyRouter = await hre.ethers.getContractFactory(contractName);
  const router = await AnyRouter.deploy(address_config.origin.config_router_account_address, {gasLimit: 6000000, gasPrice: 20000000000});
  await router.deployed();
  console.log("config address: ", router.address)
}

async function checkBalance(chain) {
  const balance = await ethers.provider.getBalance(chain.account_address);
  console.log(ethers.utils.formatEther(balance));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
