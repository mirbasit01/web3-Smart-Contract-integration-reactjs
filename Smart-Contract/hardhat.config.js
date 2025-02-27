require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/8f-PNfpw0t_FeTx575IcVROLNP8uMEJg",
      accounts: [
        "8be8b9ecfce60dd202cf4523e1fd5f1bf6e888677a6b39f5fb8372bc2a436f5e",
      ],
      gas: 2100000,
      gasPrice: 80000000000,
    },
  },
};
