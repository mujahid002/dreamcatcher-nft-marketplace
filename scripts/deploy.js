const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("dreamcatcher");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  console.log("dreamcatcher's nftMarketplace deployed to:", nftMarketplace.address);

  fs.writeFileSync('./config.js', `
  export const marketplaceAddress = "${nftMarketplace.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });