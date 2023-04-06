module.exports = {
    // relation wallet address : 0xcfC9658f2EF3dB4455D8d83d517b0467D5887268
    LOCAL_ACCOUNT_PRIVATE_KEY : '0x2d5d6416aa0b59469046ea2786d869ea26e2a133724547a5a4297934885ba800',

    // 5777-7545
    origin : {
        url: 'http://127.0.0.1:7545',
        chain_id: '5777',
        chain_name: '7545_eth',

        token_name : 'Test1',
        token_symbol : 't1',
        account_address : '0xfF0f7ebAC792A79478071D71826A49a1b53f31F8',
        test_private_key : '0xa5bff02f4c31e03201629632d8dae9bca1e500bfb001c54bd3b0c1d76bb77183',

        config_router_account_address : ['0xfF0f7ebAC792A79478071D71826A49a1b53f31F8', '0x1020CFEF10585Ad3BeE48BEf61734F1Ff1fF08FB'],
    
        token_address : '0x0b32E2092B2dF5117Fb6d549FfE252915BA22146',
        router_address: '0xd50A75a67c81E2Ece8fb912DC982DC07411d7D51',
        // config router 的地址 目前config 合约配置在源链上面
        config_address: '0x97d830bCa372e566C4b6d67F122704692beBd20a',
    },

    //5888-7546
    destination : {
        url: 'http://127.0.0.1:7546',
        chain_id: '5888',
        chain_name: '7546_eth',

        token_name : 'Test1',
        token_symbol : 't1',
        account_address : '0x7bB201f5733dA1Ae7B19a8a3F67bDd25A9e1CfaD',
        test_private_key :'0x7efefabc8250c0f9eee0745b7676dfed339b3d1525f939aabf975b7a412dea61',

        token_address : '0x103b15355BE3876E61C4EBdD1FB934c2f3471B72',
        router_address: '0x747E9Ab8Ef818A834f3fB56e2FBe07AA0ee0Abca',
    }
}