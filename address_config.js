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
        account_address : '0x8562e81Ec817a9bc1B4f1273f4010e67212a580D',
        test_private_key : '0xaf77aa06ea64d624df76c0498f568198ba01f3f9b082bea6392a19defffc9ed7',

        config_router_account_address : ['0x8562e81Ec817a9bc1B4f1273f4010e67212a580D', '0x0e8447d88B8C8b78297669A332C441BC3A851F27'],
        config_address: '0x8B148aCC33647992387060e3D1239Ea863824AAf',
    
        token_address : '0xafEff6CA12080f2eC518048e10EE067b17fa8FF1',
        router_address: '0x110eD7f92B9a2bBF283BAb148E80901B2Cd41439',
    },

    //5888-7546
    destination : {
        url: 'http://127.0.0.1:7546',
        chain_id: '5888',
        chain_name: '7546_eth',

        token_name : 'Test2',
        token_symbol : 't2',
        account_address : '0xe3B94e10d5293Be25Bb7c320be1e55bcfbC99538',
        test_private_key :'0x42d6003bd6c3491eb3f9a31dc392bbb44a79bf860b9fa9feed9a57ded9060b60',

        token_address : '0x42A1BaB83AfE14fdb44956E219d91fB86A47aFB1',
        router_address: '0xB0a5C927A261AD8504923976ac88A4F04E17358e',
    }
}