require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const GOERLI_RPC = process.env.GOERLI_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: GOERLI_RPC,
      accounts: [PRIVATE_KEY],
    },
  },
};