// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract wallet{
    mapping(address => uint) private balances;
    mapping(address => bool) private account;
    
    modifier walletChecker(){
        require(account[msg.sender] == true,"Enter Wallet ID");
        _;
    }

    function Wallet_ID() public {  
        account[msg.sender] = true;
    }

    function deposit(uint Amount) public walletChecker(){
        assert(balances[msg.sender] + Amount>= Amount);
        balances[msg.sender]+= Amount;
    }

    function withdraw(uint Amount) public walletChecker(){
        if(Amount >= balances[msg.sender]){
            revert("Insufficient Balance");
        }
        balances[msg.sender] -= Amount;    
    }

    function transfer(address Address,uint Amount) public walletChecker(){
        require(balances[msg.sender] > Amount,"Insufficiant Balance");
        
        balances[msg.sender] -= Amount;
        balances[Address] += Amount;
    }

    function CheckBalance() public view returns(uint){
        console.log("Balance: ",balances[msg.sender]);
        return balances[msg.sender];

    }
}