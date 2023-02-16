// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./INonfungiblePositionManager.sol";

contract CrowdSale is Ownable {
    uint256 public time_of_buy;
    uint256 public early_bonus_token;
    uint256 public early_users;
    uint256 public initial_users;
    uint256 public _tokenId = 46863;

    IERC20 public TOKEN_A;
    IERC20 public TOKEN_B;

    event TokenBuy(address Owner, address buyer, uint256 tokenAmount);

    event SetSale(
        uint256 time_of_buy,
        uint256 early_bonus_token,
        uint256 initital_users
    );
    event IncreaseLiquidityCurrentRange(
        uint256 tokenId,
        uint256 amountAdd0,
        uint256 amountAdd1
    );

    INonfungiblePositionManager public nonfungiblePositionManager =
        INonfungiblePositionManager(0xC36442b4a4522E871399CD717aBDD847Ab11FE88);

    constructor(address _TOKEN_A, address _TOKEN_B) {
        TOKEN_A = IERC20(_TOKEN_A);
        TOKEN_B = IERC20(_TOKEN_B);
    }

    function increaseLiquidityCurrentRange(
        uint256 tokenId,
        uint256 amountAdd0,
        uint256 amountAdd1
    ) public returns (uint128 liquidity, uint256 amount0, uint256 amount1) {
        TOKEN_A.approve(address(nonfungiblePositionManager), amountAdd0);
        TOKEN_B.approve(address(nonfungiblePositionManager), amountAdd1);

        INonfungiblePositionManager.IncreaseLiquidityParams
            memory params = INonfungiblePositionManager
                .IncreaseLiquidityParams({
                    tokenId: tokenId,
                    amount0Desired: amountAdd0,
                    amount1Desired: amountAdd1,
                    amount0Min: 0,
                    amount1Min: 0,
                    deadline: block.timestamp
                });

        (liquidity, amount0, amount1) = nonfungiblePositionManager
            .increaseLiquidity(params);

        emit IncreaseLiquidityCurrentRange(tokenId, amountAdd0, amountAdd1);
    }

    function set_sale(
        uint256 set_time,
        uint256 early_bonus,
        uint256 early_users_quantity
    ) public onlyOwner {
        time_of_buy = set_time + block.timestamp;
        early_bonus_token = early_bonus;
        early_users = early_users_quantity;

        emit SetSale(set_time, early_bonus, early_users_quantity);
    }

    function reset_sale() external onlyOwner {
        early_bonus_token = 0;
        time_of_buy = 0;
        early_users = 0;
    }

    function resetInitialUsers() external onlyOwner {
        initial_users = 0;
    }

    function buyToken(uint256 tokens) public {
        require(block.timestamp < time_of_buy, "Time have not be set for buy");
        require(
            TOKEN_A.allowance(msg.sender, address(this)) >= tokens,
            "!allowance TOKEN A"
        );
        require(TOKEN_B.balanceOf(address(this)) >= tokens, "!balance TOKEN B");

        uint tokens_a = tokens;
        uint tokens_b = tokens;

        TOKEN_A.transferFrom(msg.sender, address(this), tokens_a);

        if (early_users >= initial_users + 1) {
            TOKEN_B.transfer(msg.sender, tokens_b + early_bonus_token);
        } else {
            TOKEN_B.transfer(msg.sender, tokens_b);
        }

        initial_users++;

        increaseLiquidityCurrentRange(_tokenId, tokens_a, tokens_b);

        emit TokenBuy(owner(), msg.sender, tokens);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    receive() external payable {}
}
