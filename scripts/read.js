
require('dotenv').config();
const { ethers } = require("ethers");
const walletAbi = require('../artifacts/contracts/CrowdSale.sol/CrowdSale.json');
const Alchemy_Key = 'https://eth-goerli.g.alchemy.com/v2/qOgJ7Ht249mnpGObST0jYJ4C8ESI9X35'
const provider = new ethers.providers.JsonRpcProvider(Alchemy_Key);
const contractAddress = process.env.contracAddress;

const read_contract = async () => {
  const crowd_sale_contract = new ethers.Contract(
    contractAddress,
    walletAbi.abi,
    provider
  );

  const contractName = await crowd_sale_contract.name();
  console.log("Contract Name:", contractName);

  const contractBalance = await crowd_sale_contract.getContractBalance();
  const bal_eth_Contract = ethers.utils.formatEther(contractBalance);
  console.log("Contract Balance:", bal_eth_Contract);

  const userBalance = await crowd_sale_contract.balanceOf(
    '0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1'
  );
  const balance_USer = ethers.utils.formatEther(userBalance);
  console.log(balance_USer);

  const total_supply = await crowd_sale_contract.totalSupply();
  const format = ethers.utils.formatEther(total_supply);
  console.log(format);

};
read_contract();