const { expect, assert, use, chai } = require("chai")
const { solidity } = require("ethereum-waffle");
const { waffle, ethers, artifacts, contract } = require("hardhat")
const { Contract } = require("ethers");
const { expectRevert, balance } = require("@openzeppelin/test-helpers");
const ether = require("@openzeppelin/test-helpers");
const expectEvent = require("@openzeppelin/test-helpers/src/expectEvent");

contract("CrowdSale", async () => {

    [owner, addr1, addr2, addr3] = await ethers.getSigners();
    let crowdSale;
    let token_a;
    let token_b;
    let Address = '0xc9cf24A1145233d8607a6c996373c05dBC2397D4';

    it("Deploy contracts", async () => {

        const TOKEN_A = await ethers.getContractFactory('TOKEN_A');
        token_a = await TOKEN_A.deploy();
        await token_a.deployed();
        console.log("TOKEN_A contract address: ", token_a.address);

        const TOKEN_B = await ethers.getContractFactory('TOKEN_B');
        token_b = await TOKEN_B.deploy();
        await token_b.deployed();
        console.log("TOKEN_B contract address: ", token_b.address);

        const CrowdSale = await ethers.getContractFactory("CrowdSale");
        crowdSale = await CrowdSale.deploy(token_a.address, token_b.address);
        await crowdSale.deployed();
        console.log("Contract Address of Crowdale: ", crowdSale.address);

        let tx = await owner.sendTransaction({
            to: crowdSale.address,
            value: ethers.utils.parseEther("1"),
        });
        console.log(tx.Value);
    });

    it("Check addresses of nonfungiblePositionManager in crowdSale contract", async () => {
        var INonfungiblePositionManager = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';
        expect(await crowdSale.nonfungiblePositionManager()).to.equal(INonfungiblePositionManager);
    });

    it("Set sale function in crowdsale contract", async () => {
        var time = 12;
        var bonus = 8;
        var users = 6;
        await crowdSale.set_sale(time, bonus, users);
        // expect(await crowdSale.time_of_buy()).to.equal(time + block.timestamp());
        expect(await crowdSale.early_bonus_token()).to.equal(bonus);
        expect(await crowdSale.early_users()).to.equal(users);
    });

    it("reset_sale in crowdsale contract", async () => {
        await crowdSale.reset_sale();
        expect(await crowdSale.time_of_buy()).to.equal(0);
        expect(await crowdSale.early_bonus_token()).to.equal(0);
        expect(await crowdSale.early_users()).to.equal(0);
    });

    it("resetInitialUsers in crowdsale contract", async () => {
        await crowdSale.resetInitialUsers();
        expect(await crowdSale.initial_users()).to.equal(0);
    });

    it("getContractBalance in crowdsale contract", async () => {
        expect(await crowdSale.getContractBalance()).to.equal(1);
    });

    ////////////////// Token A //////////
    it("CrowdSale contract end", async () => {
    });

    it("Check name in TOKEN_A contract", async () => {
        expect(await token_a.name()).to.equal('TOKEN_A');
    });

    it("Check owner in TOKEN_A contract", async () => {
        expect(await token_a.owner()).to.equal(owner.address);
    });

    it("Check symbol in TOKEN_A contract", async () => {
        expect(await token_a.symbol()).to.equal("A");
    });

    it("Check decimals in TOKEN_A contract", async () => {
        expect(await token_a.decimals()).to.equal(18);
    });

    it("Check total supply and owner balance because initial supply is equal to owner balance in TOKEN_A contract", async () => {
        expect(await token_a.totalSupply()).to.equal('120000000000000000000000000000');
    });

    it("Check allowance, allowance will be zero because this address has not approved in TOKEN_A contract", async () => {
        expect(await token_a.allowance(owner.address, Address)).to.equal('0');
    });

    it("Transfer tokens in TOKEN_A contract", async () => {
        await token_a.transfer(Address, 10);
        expect(await token_a.balanceOf(Address) == 10);
    });

    it("Allowance in TOKEN_A contract", async () => {
        await token_a.approve(Address, 100);
        expect(await token_a.allowance(owner.address, Address) == 100);
    });

    it("Transfer from in TOKEN_A contract", async () => {
        await token_a.transferFrom(owner.address, Address, 10);
        expect(await token_a.balanceOf(Address) == 20);
    });

    ////////////////////// TOKEN_B ///////////

    it("TOKEN_A contract end", async () => {
    });

    it("Check name in TOKEN_B contract", async () => {
        expect(await token_b.name()).to.equal('TOKEN_B');
    });

    it("Check owner in TOKEN_B contract", async () => {
        expect(await token_b.owner()).to.equal(owner.address);
    });

    it("Check symbol in TOKEN_B contract", async () => {
        expect(await token_b.symbol()).to.equal("B");
    });

    it("Check decimals in TOKEN_B contract", async () => {
        expect(await token_b.decimals()).to.equal(18);
    });

    it("Check total supply and owner balance because initial supply is equal to owner balance in TOKEN_B contract", async () => {
        expect(await token_b.totalSupply()).to.equal('120000000000000000000000000000');
    });

    it("Check allowance, allowance will be zero because this address has not approved in TOKEN_B contract", async () => {
        expect(await token_b.allowance(owner.address, Address)).to.equal('0');
    });

    it("Transfer tokens in TOKEN_B contract", async () => {
        await token_b.transfer(Address, 10);
        expect(await token_b.balanceOf(Address) == 10);
    });

    it("Allowance in TOKEN_B contract", async () => {
        await token_b.approve(Address, 100);
        expect(await token_b.allowance(owner.address, Address) == 100);
    });

    it("Transfer from in TOKEN_B contract", async () => {
        await token_b.transferFrom(owner.address, Address, 10);
        expect(await token_b.balanceOf(Address) == 20);
    });

});

