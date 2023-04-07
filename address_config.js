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
        account_address : '0x6546394bb1e8e4f9Bbf93Cb3160958a490b6984D',
        test_private_key : '0x8a34bd8cf8d288002f44360dc39678f09f5f87b814622e4780acdaf433a1ad05',

        config_router_account_address : ['0x6546394bb1e8e4f9Bbf93Cb3160958a490b6984D', '0x1CA447846E92A2D1649f97Cc4BbE94904B71388A'],
    
        token_address : '0x4e566A24291fc2B42A986e323E2988464e0F51f4',
        router_address: '0xA5D96498060Bf4234D6806E0b8072fDB157c583A',
        // config router 的地址 目前config 合约配置在源链上面
        config_address: '0xb128914a3D2243B1063d5bFd4B3cdEB283964013',
    },

    //5888-7546
    destination : {
        url: 'http://127.0.0.1:7546',
        chain_id: '5888',
        chain_name: '7546_eth',

        token_name : 'Test1',
        token_symbol : 't1',
        account_address : '0xC847F6555d086cC3Fb2BB819806C39B5D1d444DA',
        test_private_key :'0xa9b5c1f11f485f4daa70f425ec08feeac9a50f9b146e5b8c78fa75b130c360bf',

        token_address : '0xad98C203878072381f2F412F1C235EA186BC42B7',
        router_address: '0x0c9015Cd11080c5d2bE28AEaAD3b912b092a5023',
    },

    mpc : {
        address: '0xfb1e460b363fE69E784e4d5df0cD58Cf13F49D0A',
        pubkey: '041b369dc0c2560f3c8965ee8de8e2b60fd286bf6495a392cc0d9624a3b217de8bde4ca349626e1acd43cf9d4e9abffb27a38c0b4a10be902759f860454a09cc71',
    }
}