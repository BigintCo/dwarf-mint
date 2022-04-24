const hre = require("hardhat");

async function main() {

  const NFT = await hre.ethers.getContractFactory("testdf");
  const nft = await NFT.deploy("testdf","tdf","uri","0xAdaaf21678ce62E1F71bc9e4d9020574Eb1797d8");
  await nft.deployed();
  console.log("nft deployed to:", nft.address);
}
main()