const hre = require("hardhat");
const fs = require("fs");
const ethers = hre.ethers;

const config = require("../address_config.js")

const zero_address = '0x0000000000000000000000000000000000000000'

const decimal18 = '000000000000000000'

const decimal16 = '0000000000000000'

async function main() {
    //queryVault(config.origin);

    // 这个initVault的作用是：因为当前deploy的时候是vault是发合约的账号，然后使这个vault生效，并且把当前的minter也设置为发合约的账号，
    //方便mint一些币测试, 然后后面再调用call.js里面的setVault 来吧vault设置为router_address
    //initVault(config.origin);

    //isMinter(config.origin);
    //getAllMinters(config.origin);
    //owner(config.origin);
    //mint(config.origin);
    //balanceOf(config.origin);

    //AnyRouterGetMPC(config.goerli);

    //RouterConfigGetMPC(config.origin);

    //RouterConfigOwner(config.origin);

    //swap(config.origin, config.origin, config.sei);

    swapOnSingleChain(config.origin, config.origin, config.origin);
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
    const success = await contract.isMinter(chain.token_address);
    console.log(success);
}

async function getAllMinters(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );
    const allMinters = await contract.getAllMinters();
    console.log(allMinters);
}

async function owner(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );
    const owner = await contract.owner();
    console.log(owner);
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
    const va = await contract.mint(chain.account_address, '999000000000000000000', {gasLimit: '6000000'});
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
    const pubkey = await contract.getMPCPubkey(config.mpc_nonEvm.address);
    console.log("pubkey get mpc= ", pubkey);
}

async function RouterConfigOwner(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/RouterConfig.sol/RouterConfig.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.config_address,
      abi,
      provider.getSigner()
    );
    const owners = await contract.owners();
    console.log("router config owners = ", owners);
}

//  unction anySwapOut(address token, string memory to, uint amount, uint toChainID) external {
async function swap(chain,from, to) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6Router.sol/AnyswapV6Router.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.router_address,
      abi,
      provider.getSigner()
    );

    fromTOken = from.token_address;
    receiveAddress = to.receive_address;
    amount = 60000;
    tochainID = parseInt(to.chain_id);
    const result1 = await contract.functions["anySwapOut(address,string,uint256,uint256)"](
        fromTOken,
        receiveAddress,
        amount,
        tochainID,
        {
          gasLimit: 500000,
          gasPrice: ethers.utils.parseUnits("10", "gwei"),
        }
      );
    //const success = await contract.anySwapOut(fromTOken, toToken, amount, tochainID);
    console.log("success ", result1);
}

async function swapOnSingleChain(chain,from, to) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6Router.sol/AnyswapV6Router.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.router_address,
      abi,
      provider.getSigner()
    );

    fromTOken = from.token_address;
    receiveAddress = to.receive_address;
    amount = 60000;
    tochainID = parseInt(to.chain_id);
    const result1 = await contract.functions["anySwapOut(address,address,uint256,uint256)"](
        fromTOken,
        receiveAddress,
        amount,
        tochainID,
        {
          gasLimit: 500000,
          gasPrice: ethers.utils.parseUnits("10", "gwei"),
        }
      );
    //const success = await contract.anySwapOut(fromTOken, toToken, amount, tochainID);
    console.log("success ", result1);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });