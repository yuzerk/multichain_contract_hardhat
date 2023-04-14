const {projectId, privateKey, accountAddress } = require('./secrets.json');

module.exports = {
    // relation wallet address : 0xcfC9658f2EF3dB4455D8d83d517b0467D5887268
    LOCAL_ACCOUNT_PRIVATE_KEY : '0x2d5d6416aa0b59469046ea2786d869ea26e2a133724547a5a4297934885ba800',

    // 5777-7545
    origin : {
        url: 'http://127.0.0.1:7545',
        chain_id: '5777',
        chain_name: '7545_eth',

        token_name : 'usei',
        token_symbol : 'sei',
        account_address : '0x394CCd5872Fd3Be2C03CccaAfbF0e5546cD0bC9A',
        test_private_key : '0xbbc59a4f6e15a59bc13bff07e32375cabe942dcb0951edca125f543612a808bc',

        config_router_account_address : ['0x394CCd5872Fd3Be2C03CccaAfbF0e5546cD0bC9A', '0x286520c21abCcaB530e5A039b2c87f93D2D5DfCA'],
    
        token_address : '0x562c1d2ED5bDa7Ac373f95d4c82B513eDCd3a911',
        router_address: '0x3fE228aD2B2611702E3B3fDBcAEB46D054260a2B',
        // config router 的地址 目前config 合约配置在源链上面
        config_address: '0x035D4cCf2EDbb1D2B6F47a528E36DF34bcc00f38',

        receive_address: '0x286520c21abCcaB530e5A039b2c87f93D2D5DfCA',
    },

    //5888-7546
    destination : {
        url: 'http://127.0.0.1:7546',
        chain_id: '1000005457226',
        chain_name: 'sei',

        token_name : 'usei',
        token_symbol : 'sei',
        account_address : 'sei1l74vmclrhzksc6ju0hxxf4c9yy4m4yyqu5sgtg',
        test_private_key :'0xa9b5c1f11f485f4daa70f425ec08feeac9a50f9b146e5b8c78fa75b130c360bf',

        token_address : '0xa76f809FB15704D535Bc4D85C57336Bf73Dc9C08',
        router_address: 'sei1l74vmclrhzksc6ju0hxxf4c9yy4m4yyqu5sgtg',
    },

    sei : {
        url: '',
        chain_id: '1000005457226',
        chain_name: 'sei',

        token_name : 'usei',
        token_symbol : 'sei',
        account_address : 'sei1l74vmclrhzksc6ju0hxxf4c9yy4m4yyqu5sgtg',
        //test_private_key :'0xa9b5c1f11f485f4daa70f425ec08feeac9a50f9b146e5b8c78fa75b130c360bf',

        token_address : 'usei',
        router_address: 'sei1l74vmclrhzksc6ju0hxxf4c9yy4m4yyqu5sgtg',

        receive_address: 'sei1yxkaayq2kv4l9zl4xt49xz9uz9m4ag4ngjwzm0',

        extra: 'sei:usei'
    },

    goerli : {
        url: "https://goerli.infura.io/v3/" + projectId,
        chain_id: '5',
        chain_name: 'goerli',

        token_name : 'usei',
        token_symbol : 'sei',
        account_address : accountAddress,
        test_private_key :privateKey,

        token_address : '0xD07d87E8D72E36bc43616BF8D40075444044d90e',
        router_address: '0x397915373812498893b61975bc97a1c9cf3d410b',

        // config router 的地址 目前config 合约配置在源链上面
        config_address: '0x0Ac099EEB0Be7e4De9c8bEDE1a27CAE725542C46',
    },

    bsc_test_net : {
        url: "https://goerli.infura.io/v3/" + projectId,
        chain_id: '5',
        chain_name: 'goerli',

        token_name : 'usei',
        token_symbol : 'sei',
        account_address : accountAddress,
        test_private_key :privateKey,

        token_address : '0xD07d87E8D72E36bc43616BF8D40075444044d90e',
        router_address: '0x822a26dad4c8b896fa8380c487f184f63d0d998d',

        // config router 的地址 目前config 合约配置在源链上面
        config_address: '0x0Ac099EEB0Be7e4De9c8bEDE1a27CAE725542C46', 
    },

    mpc : {
        address: '0xB5DF9df90e59b90C48463b559775510C488818bD'.toLowerCase(),
        pubkey: '04a98dbb3c1051b015088a1c70ea2cfb0eddb13d6a490bd6cb0edce19b1937b66c5d8e9d41d5e4488dd4689f6462676c5ed413d7ba4781fa85b6aca2a238aa94b5',
    },
    mpc_nonEvm : {
        address: 'sei1l74vmclrhzksc6ju0hxxf4c9yy4m4yyqu5sgtg'.toLowerCase(),
        pubkey: '04a98dbb3c1051b015088a1c70ea2cfb0eddb13d6a490bd6cb0edce19b1937b66c5d8e9d41d5e4488dd4689f6462676c5ed413d7ba4781fa85b6aca2a238aa94b5',
    }
}