"use strict";
const env = require("./env.json");
Object.assign(process.env, env);

const ethers = require("ethers");
const provider = new ethers.providers.WebSocketProvider(
  process.env.BSC_NODE_WSS
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const account = wallet.connect(provider);
var args = process.argv.slice(2);

const run = async () => {
  const factory = new ethers.Contract(
    "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
    [
      "function getPair(address tokenA, address tokenB) external view returns (address pair)",
    ],
    account
  );
  const pairAddress = await factory.getPair(
    "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // wbnb
    args[0]
  );
  console.log("pairAddress: " + pairAddress);
  process.exit();
};
if (!args[0]) {
  console.log("Usage: node getPair [token contract]");
  process.exit();
}
run();
