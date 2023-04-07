const hre = require("hardhat");
const fs = require("fs");
const ethers = hre.ethers;

const config = require("../address_config.js")

const zero_address = '0x0000000000000000000000000000000000000000'

const decimal18 = '000000000000000000'

const decimal16 = '0000000000000000'

async function main() {
    
    //RouterConfigSet();
    //erc20tokenConfig(config.origin);
    //AnyRouterChaneMPC(config.destination);
    RouterConfigPubkeySet();
}

async function RouterConfigSet() {
    const provider = new hre.ethers.providers.JsonRpcProvider(config.origin.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/RouterConfig.sol/RouterConfig.json")).abi;
    const contract = new hre.ethers.Contract(
      config.origin.config_address,
      abi,
      provider.getSigner()
    );
    // //配置chain
    // await contract.setChainConfig(config.origin.chain_id, config.origin.chain_name, config.origin.router_address, 1, 0, "");
    // const chainConfig = await contract.getChainConfig(config.origin.chain_id);
    // if (chainConfig.RouterContract != config.origin.router_address) {
    //     console.log('RouterConfigSet setChainConfig error, chainConfig.RouterContract is ', chainConfig.RouterContract, 'config.origin.router_address', config.origin.router_address)
    // }

    // //配置token
    // await contract.setTokenConfig(config.origin.token_name,config.origin.chain_id, config.origin.token_address, 18, 1, zero_address, "");
    // const tokenConfig = await contract.getTokenConfig(config.origin.token_name, config.origin.chain_id);
    // console.log("tokenconfig :", tokenConfig);
    // if (tokenConfig.ContractAddress != config.origin.token_address) {
    //     console.log("RouterConfigSet setTokenConfig error");
    // }

    // 配置swapAndFeeConfig
    const tokenID = config.origin.token_name;
    const srcChainID = 0;   //fromChainId 测试时可以直接设置为0   【0, 0】为默认所有token的兜底配置
    const dstChainID = 0;  //tochainId   测试室可以直接设置为0   【0, 0】为默认所有token的兜底配置
    const maxSwap = '10000000000000000000' // 10 ETH
    const minSwap = '100000000000000000'; // 0.1 ETH
    const bigSwap = '5000000000000000000'; // 20 ETH
    const maxFee = '50000000000000000'; // 0.05 ETH
    const minFee = '10000000000000000'; // 0.01 ETH
    const feeRate = '1000'; // feeRate   x / per 1 million
    const gasLimit = '6000000';

    // await contract.setSwapConfig(
    //     tokenID, srcChainID, dstChainID, maxSwap, minSwap, bigSwap, {gasLimit: gasLimit}
    // );
    // const swapConfig = await contract.getSwapConfig(tokenID, 0, 0);
    // console.log('swapConfig is ', swapConfig);

    // await contract.setFeeConfig(
    //     tokenID, srcChainID, dstChainID, maxFee, minFee, feeRate, {gasLimit: gasLimit}
    // );
    // const feeConfig = await contract.getFeeConfig(tokenID, 0, 0);
    // console.log('feeConfig is ', feeConfig);
    
}

async function erc20tokenConfig(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6ERC20.sol/AnyswapV6ERC20.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.token_address,
      abi,
      provider.getSigner()
    );

    // await contract.setMinter(chain.router_address, {gasLimit: '6000000'});
    // await contract.applyMinter();
    // const isMinter = await contract.isMinter(chain.router_address);
    // console.log(chain.router_address, ' is minter? ', isMinter);

    //const res = await contract.setVault(config.mpc.address, {gasLimit: '6000000'});

    //await contract.applyVault();
}

async function AnyRouterChaneMPC(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(chain.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/AnyswapV6Router.sol/AnyswapV6Router.json")).abi;
    const contract = new hre.ethers.Contract(
      chain.router_address,
      abi,
      provider.getSigner()
    );
    const success = await contract.changeMPC(config.mpc.address, {gasLimit : '6000000'});
    console.log(chain.chain_name, "router change mpc success? ", success);
}

async function RouterConfigPubkeySet(chain) {
    const provider = new hre.ethers.providers.JsonRpcProvider(config.origin.url);
    const abi = JSON.parse(fs.readFileSync("artifacts/contracts/RouterConfig.sol/RouterConfig.json")).abi;
    const contract = new hre.ethers.Contract(
      config.origin.config_address,
      abi,
      provider.getSigner()
    );
    const success = await contract.setMPCPubkey(config.mpc.address, config.mpc.pubkey,{gasLimit : '6000000'});
    console.log("setMPCPubkey mpc success? ", success);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});