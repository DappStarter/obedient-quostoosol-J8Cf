require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remind concert hunt option bridge that'; 
let testAccounts = [
"0xad36fd4e2a18e72cbac6d1428769e1eb556f52bd54ac8bee2aa691bebe0697d6",
"0x4cb4f1f05a7faeee6f5f112359d5ac077cff92c37e6b7320b6b5a593001eadc5",
"0x5190d70529cba39b60ecdf02c8274c34e23a986217dc1d9d2b592e5176b2e5ab",
"0xf4f7667c0eb82130fa416ed9e355f44b89b1bf06417ca54e61d90bd70c98530f",
"0x25600a92ec46f3ada205784e16ab328af809b9f01d8b40941171033f0004716f",
"0xbb375c36db41a7a8f9219b6c4be06ddd9a790037ee7d11b380df9c4648063bc0",
"0xa84dabca28e27fcad73c9ad2838fa2ec937cd2b1f501db545d24af05fe74ebe8",
"0xa6d6a865ea4ce65470822e0e6bd258ac211786e803d861fdec0e05b0afb3eadf",
"0x5bdee485f33171a5dfdbc857e2c1d86ec1862588ef16058f35f57154b6b56ed3",
"0x3477b72babe7d8cd4fa41d087409337b5fb18a3d53f62d8d63c1f9ca75c38b0c"
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

