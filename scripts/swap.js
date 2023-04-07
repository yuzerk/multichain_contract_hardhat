const hre = require("hardhat");
const fs = require("fs");
const ethers = hre.ethers;

const config = require("../address_config.js")

const zero_address = '0x0000000000000000000000000000000000000000'

const decimal18 = '000000000000000000'

const decimal16 = '0000000000000000'

async function main() {
    //queryVault(config.origin);
    //initVault(config.origin);
    //isMinter(config.origin);
    //mint(config.origin);
    //balanceOf(config.origin);

    //AnyRouterGetMPC(config.destination);

    RouterConfigGetMPC(config.origin);
}

async function balanceOf(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );
    const balance = await contract.balanceOf(chain.account_address);
    console.log(balance);
}

async function isMinter(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );
    const success = await contract.isMinter(chain.account_address);
    console.log(success);
}

async function initVault(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );
    const success = await contract.initVault(chain.account_address, {gasLimit: '6000000'});
    console.log(success);
}

async function queryVault(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );
    const va = await contract.owner();
    console.log(va);
}

async function mint(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );
    const va = await contract.mint(chain.account_address, '999000000000000000000');
    console.log(va);
}

async function AnyRouterGetMPC(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6Router.sol/AnyswapV6Router.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.router_address,
      abi,
      provider.getSigner()
    );
    const m = await contract.mpc();
    console.log(chain.chain_name, "router get mpc= ", m);
}

async function RouterConfigGetMPC(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/RouterConfig.sol/RouterConfig.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.config_address,
      abi,
      provider.getSigner()
    );
    const pubkey = await contract.getMPCPubkey(config.mpc.address);
    console.log("pubkey get mpc= ", pubkey);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });