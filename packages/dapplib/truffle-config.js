require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot damp deny spice pulse gentle light army gentle'; 
let testAccounts = [
"0x22f32344bf52b4e4aa23727e9c234bdb6c328a1ae2bc0182310180d3413b56b0",
"0x32ada81e31219ba45dd32042f795d31b92d83c71099c4146987819b239a696aa",
"0x535d3b5f0075f95a6929591cfd4b94eb03fba3a9180c1049ee6b99c9c652c02b",
"0x5a089900799043aa2e9d6a4471320cdad1be1f04965102b258e88da9f64f1993",
"0xb41535786fcd68523c2c3f3919d9f6cfd9db32bdb2acfbc8ce2a51d61d0006ae",
"0xccfe7ad63bb8c99d4ab8fd4f9cd91d9d2b48ad9e13c7540a580b3656765adc5a",
"0xfa3e8d63adeff5a30ac9c97d103efeacac8a566bc508dd5e26751d0dffbde548",
"0x60d0604f7d1d1e4d199d17586804505d72ee6db33e5e3f8ff9c4d7febf43d0ec",
"0xa248bfb29acf81c8d20561c447309651906c6b61c5f225be4a50189969fbf57a",
"0x4433f7bd0795f66c2f9bd6ddda67026d4f111b75634a21f1c105536c190802a4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

