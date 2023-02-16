const hre = require("hardhat");

async function main() {
  const TOKEN_A = await hre.ethers.getContractFactory("TOKEN_A");
  const token_a = await TOKEN_A.deploy();
  await token_a.deployed();
  console.log(
    `TOKEN_A contract is deployed on this address: ${token_a.address}`
  );


  const TOKEN_B = await hre.ethers.getContractFactory("TOKEN_B");
  const token_b = await TOKEN_B.deploy();
  await token_b.deployed();
  console.log(
    `TOKEN_B contract is deployed on this address: ${token_b.address}`
  );

  
  const CrowdSale = await hre.ethers.getContractFactory("CrowdSale");
  const Crowd_Sale = await CrowdSale.deploy({
    _TOKEN_A : '0x247f9190b3e8cFE29E961259dD53d6B59Ad0057a',
    _TOKEN_B : '0x5ECC40960Ffc7E9D8E487A6308bfA5aD1eCa703a'
  });
  await Crowd_Sale.deployed();
  console.log(
    `Crowd Sale contract is deployed on this address: ${Crowd_Sale.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
