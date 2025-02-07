require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load .env variables

module.exports = {
  solidity: "0.8.20",
  networks: {
    amoy: { 
      url: process.env.ALCHEMY_AMOY_RPC || "https://polygon-amoy.g.alchemy.com/v2/YOUR_API_KEY", // Replace YOUR_API_KEY
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [], // ✅ Ensure it's an array
    }
  }
};