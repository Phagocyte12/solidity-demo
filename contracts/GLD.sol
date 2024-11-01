// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";


contract GLD is ERC20 {
   
    constructor(uint256 initial) ERC20("Gold","GLD")  {
        console.log("Deloying GLD", msg.sender, initial);
        // _mint(msg.sender,100 * 10 ** uint256(initial));
        _mint(msg.sender,initial);
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        console.log("Approve" , msg.sender, spender, amount);
        return super.approve(spender, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        console.log("TransferFrom" ,sender, recipient, amount);
        return super.transferFrom(sender, recipient, amount);
    }
 
}
