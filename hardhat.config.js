require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-truffle5");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */

const { ALCHEMY_URL, ALCHEMY_API_KEY, Goerli_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `${ALCHEMY_URL}${ALCHEMY_API_KEY}`,
      accounts: [`${Goerli_PRIVATE_KEY}`],
      gasMultiplier: 1,
      gas: 2100000,
      gasPrice: 8000000000,
      timeout: 20000,
      saveDeployments: true,
      chainId: 5,
    },
  },
};
