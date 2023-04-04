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
        account_address : '0x08ccCCE861E069f9cCD2079Fb73C3BF10986B9B6',
        test_private_key : '0xcfff7d6939b4458ddf6ba546042ce42a5780bb7c233b8edf607a4833809c230b',

        config_router_account_address : ['0x08ccCCE861E069f9cCD2079Fb73C3BF10986B9B6', '0x61F6256c5C415fB4B1fEb29bAFF41e3312497102'],
        // config router 的地址 目前config 合约配置在源链上面
        config_address: '0xA6B64054eA5BE07Dd3c092405FC6F2FEB7aF4b90',
    
        token_address : '0x328C0059F8DBEA6743c0609e2a7F480B1C8C4FCB',
        router_address: '0x18A52C15086d96eD06226Db185FfEE7DCB463760',
    },

    //5888-7546
    destination : {
        url: 'http://127.0.0.1:7546',
        chain_id: '5888',
        chain_name: '7546_eth',

        token_name : 'Test1',
        token_symbol : 't1',
        account_address : '0x15261Cf4f8E003cfA33B6A07271502601065f780',
        test_private_key :'0x809a9d19d384fcb878f604d55a3042d114bcb252f0d49ee00e143fa96b356e39',

        token_address : '0x95ade95810FD5Aa7b876c7e8A3deff8FeEA5B26c',
        router_address: '0xE83A7741c5d12Fa1c2d89275BCbfFceb79A8D39a',
    }
}