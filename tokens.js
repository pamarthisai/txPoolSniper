const tokens = {
  router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
  purchaseAmount: "0.01",
  pair: [
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // WBNB
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // CAKE
  ],
  slippage: "1",
};
module.exports = tokens;

/*

If targeted token is paired with BNB, then only change the second
"pair" array item to the checksum address of the token you wish to snipe

If targeted token is paried with BUSD, then you will need to change
both "pair" array items, the first item being BUSD and the second 
with the checksum address of the token you wish to snipe 

"0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56" // BUSD Mainnet

Note: The targeted token needs to be in second position of the array

### TESTNET ### 

Change the first item in pair array
    "0xae13d989dac2f0debff460ac112a837c89baa7cd"; // WBNB Testnet

Change the router
    "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3"; // PCSv2 Router Testnet
 
*/
