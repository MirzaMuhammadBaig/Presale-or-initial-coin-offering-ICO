# // const Contract = require('../artifacts/contracts/CrowdSale.sol/CrowdSale.json');
# // const { expect } = require("chai")
# // const { ethers, artifacts } = require("hardhat")
# // const { expectRevert } = require("@openzeppelin/test-helpers");

# // const TOKEN_A = '0x247f9190b3e8cFE29E961259dD53d6B59Ad0057a'
# // const TOKEN_B = '0x5ECC40960Ffc7E9D8E487A6308bfA5aD1eCa703a'
# // const Contract_Address = "0xD8834230Be79ae9FA967686BEe9130d1103532A2"
# // const NonFungiblePositionManager = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88"

# // describe("CrowdSale", () => {
# //     let CrowdSale;
# //     let accounts;
# //     let token_a;
# //     let token_b;
# //     let address = '0xb189d95c7CbAA430Cd835c1191A5CF60E008A1b1;'

# //     // beforeEach(async () => {
# //     //     CrowdSale = await CrowdSale.new();
# //     //     console.log(CrowdSale.address);
# //     // });

# //     before(async () => {
# //         accounts = await ethers.getSigners(1);
    
# //         const CrowdSale = await ethers.getContractFactory(
# //           "CrowdSale"
# //         );
# //         // CrowdSale = await CrowdSale.deploy([
# //         //     TOKEN_A,
# //         //     TOKEN_B
# //         // ]);
# //         // await CrowdSale.deployed();
    
# //         token_a = await ethers.getContractAt("IERC20", TOKEN_A);
# //         token_b = await ethers.getContractAt("IERC20", TOKEN_B);

# //         const token_a_signer = await ethers.getSigner(address);
# //         const token_b_signer = await ethers.getSigner(address);

# //         // Send DAI and USDC to accounts[0]
# //         const token_a_amount = 1000n * 10n ** 18n;
# //         const token_b_amount = 1000n * 10n ** 6n;

# //         expect(await token_a.balanceOf(token_a_signer.address)).to.gte(token_a_amount);
# //         expect(await token_b.balanceOf(token_b_signer.address)).to.gte(token_b_amount);

# //         await token_a.connect(token_a_signer).transfer(accounts[0].address, token_a_amount);
# //         await token_b.connect(token_b_signer).transfer(accounts[0].address, token_b_amount);

# //     });

# //     it("increaseLiquidityCurrentRange", async () => {
# //         const token_a_amount = 20n * 10n ** 18n
# //         const token_b_amount = 20n * 10n ** 6n
    
# //         await token_a.connect(accounts[0]).approve(CrowdSale.address, token_a_amount)
# //         await token_b
# //           .connect(accounts[0])
# //           .approve(CrowdSale.address, token_b_amount)
    
# //         await CrowdSale.increaseLiquidityCurrentRange(token_a_amount, token_b_amount);
# //       });

# // });