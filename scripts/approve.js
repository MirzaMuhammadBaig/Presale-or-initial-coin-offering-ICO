const { ethers } = require('ethers')
require('dotenv').config()

// save the abi file locally and call it
const ContractABI = require('../artifacts/contracts/CrowdSale.sol/CrowdSale.json')

// Token addresses for Ropsten
const A = "0x656e45BB204B706Ce3Bfe34F67f016b58e5F20A4"
const Alchemy_Key = 'https://eth-goerli.g.alchemy.com/v2/qOgJ7Ht249mnpGObST0jYJ4C8ESI9X35'
// import from .env file
const { Goerli_PRIVATE_KEY } = process.env;

// input here your deployed contract
const SmartContractAddress = '0x3e2E46655dB1431b8Db50e7b656231B2ACDb3415'

// initiate wallet with private key
const provider = new ethers.providers.JsonRpcProvider(Alchemy_Key)
const wallet = new ethers.Wallet(Goerli_PRIVATE_KEY)
const connectedWallet = wallet.connect(provider)

// initiate ERC20 contract
const contract = new ethers.Contract(
    A,
    ContractABI.abi,
    provider
)

const toApproveAddress = '0xc9cf24A1145233d8607a6c996373c05dBC2397D4';
const ERC20contract = '0xe6eb4E63134196a3e1b9445d1d7D6DB0A6a8c684';
// function to approve token
const approve = async (ERC20contract, toApproveAddress) => {
    ERC20contract.connect(connectedWallet).approve(
        toApproveAddress,
        ethers.utils.parseEther("1").toString(),
        {
            gasLimit: ethers.utils.hexlify(1000000)
        }
    ).then(transaction => {
        console.log(transaction)
    })
}


async function main() {
    approve(contract, SmartContractAddress)
}

main()