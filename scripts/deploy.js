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
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.utils.parseEther("0.001");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with ${ethers.utils.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );

  //deployAnyErc20();
  //deployAnyRouter();
  deployRouterConfig();
}

async function deployAnyErc20() {
  const contractName = 'AnyswapV6ERC20';
  const MyToken1 = await hre.ethers.getContractFactory(contractName);
  const token1 = await MyToken1.deploy(address_config.destination.token_name, address_config.destination.token_symbol, 18, zero_address, address_config.destination.account_address);
  await token1.deployed();
  console.log("Token address:", token1.address);
}

async function deployAnyRouter() {
  const contractName = 'AnyswapV6Router'
  const AnyRouter = await hre.ethers.getContractFactory(contractName);
  const router = await AnyRouter.deploy(zero_address, zero_address, address_config.destination.account_address, {gasLimit: 6000000, gasPrice: 20000000000});
  await router.deployed();
  console.log("router address: ", router.address)
}

async function deployRouterConfig() {
  const contractName = 'RouterConfig'
  const AnyRouter = await hre.ethers.getContractFactory(contractName);
  const router = await AnyRouter.deploy(address_config.origin.config_router_account_address, {gasLimit: 6000000, gasPrice: 20000000000});
  await router.deployed();
  console.log("router address: ", router.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
