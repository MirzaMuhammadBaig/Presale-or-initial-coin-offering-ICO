// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TOKEN_A is ERC20, Ownable {
    constructor() ERC20("TOKEN_A", "A") {
        _mint(msg.sender, 120000000000 * 10 ** decimals());
    }
}
