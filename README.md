# CrowdSale contract:


In crowd sale smart-contract, I have imported three .sol files. One is IERC20, second is
Ownable and third is INonfungiblePositionManager, and in INonfungiblePositionManager
I have imported 4 interfaces.
Version of solidity is 0.8.9 and in two interfaces I have also imported abicoder v2 which
allows structs, nested and dynamic variables to be passed into functions, returned from
functions and emitted by events.


## About CrowdSale contract:
#### Variables:
- TokenId: Id of created pool.
- Early_bonus_token: bonus tokens of early users.
- Time_of_buy: buy time of tokens.
- Early_users: set early users for early bonus.
- Initial users: created for set of early_users.


#### Events:
- TokenBuy: address of owner, address of buyer and address of token amount.
- Set_sale: time_of_buy, early_bonus_of_token, initial_users.
- IncreaseLiquidityCurrentRange: tokenId, add amount of token0, add amount of token1.
```
Pass address in INonfungiblePositionManager of NonfungiblePositionManager.
```
#### Constructor:
- Pass address of TOKEN_A contract and TOKEN_B contract.

#### Functions:
- In the increaseLiquidityCurrentRange function I pass tokenId of token amount of token0 and amount of token 1, and this function returns liquidity, amount of token0 and amount of token 1.
- This function will approve NonfungiblePositionManager and the amount of token0 from TOKEN_A.
- This function will approve NonfungiblePositionManager and the amount of token1 from TOKEN_B.
- In the set_sale function I am doing set time, early_bonus and early_users_quantity for buying tokens.
- In the reset_sale function will reset the values of set time, early_bonus and early_users_quantity.
- In the resetInitialUsers will reset the value of inital_users.
- In the buy_token function user will input tokens_a in exchange of token_b then token_a will be transferred in contract and token_b will be transferred to user’s address.
- In the getContractBalance: function returns the amount of contract balance.
- Receive function will be called, when anyone sends money on the contract address.


#### Explain Imports:
1. First import is from openzeppelin of IERC20 that defines the functions and events that are required for the ERC20 token standard and in crowd-sale smart-contract, I am using two ERC20 token contracts (TOKEN_A, TOKEN_B), those I created for swapping and I am using these contracts addresses in IERC20.
2. Second import is from openzeppelin of Ownable. The Ownable.sol contract provides the most basic single account ownership to a contract. Only one account will become the owner of the contract and can perform administration-related tasks.
In contract I have used this for the set_sale function, because every person can’t be a caller.
3. Third import is from uniswap v3-periphery of INonfungiblePositionManager. In this interface I have created four structs and seven functions.

- Note: More about this project have here [Documentation](https://docs-of-crowdsale-contract.web.app/Documentation_of_CrowdSale_SmartContract.pdf)
