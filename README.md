# Wallet Manager

This project consists of a Solidity smart contract for managing a simple wallet and a React frontend to interact with it. The smart contract allows users to create a wallet, deposit funds, withdraw funds, and transfer funds to other accounts. The React frontend connects to the Ethereum blockchain using MetaMask and allows users to interact with the smart contract.

## Prerequisites

- Node.js (v14 or later)
- MetaMask browser extension
- An Ethereum wallet (e.g., MetaMask)

## Getting Started

### Smart Contract

1. **Clone the repository:**

   ```bash
   [git clone https://github.com/your-username/wallet-manager.git
   cd wallet-manager](https://github.com/SujalKumar10/ETH-AVAX-Intermediate.git)

2. **Install dependencies:**

   ```bash
   npm install

3. **Compile the smart contract:**

   ```bash
   npx hardhat compile

4. **Deploy the smart contract to a local blockchain:**
   
   Start a local blockchain using Hardhat:
   
   ```bash
   npx hardhat node

    
 - In another terminal, deploy the contract:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost

 ### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend


2. **Install dependencies:**

   ```bash
   npm install

3. **Update the contract address:**

   Open frontend/pages/index.js and update the contractAddress variable with the address of the deployed contract from the previous step.

   ```bash
   const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

4. **Run the frontend:**

   ```bash
   npm run dev
   
5. **Open the application:**

   Open your browser and navigate to http://localhost:3000.

## Getting Started

### Smart Contract
The smart contract code is located in contracts/Assessment.sol. It provides the following functions:

- `registerWallet()`: Registers a new wallet for the caller.
- `deposit(uint256 amount)`: Deposits the specified amount into the caller's wallet.
- `withdraw(uint256 amount)`: Withdraws the specified amount from the caller's wallet.
- `transfer(address to, uint256 amount)`: Transfers the specified amount from the caller's wallet to another wallet.
- `checkBalance()`: Returns the balance of the caller's wallet.

 ### Frontend
 
The frontend allows you to interact with the smart contract through a simple interface. The following actions are available:

- Connect MetaMask Wallet: Connects your MetaMask wallet to the application.
- Check Balance: Displays the balance of the connected wallet.
- Create Wallet: Registers a new wallet.
- Deposit 10 Tokens: Deposits 10 tokens into the connected wallet.
- Withdraw 10 Tokens: Withdraws 10 tokens from the connected wallet.
- Transfer 10 Tokens: Transfers 10 tokens to another wallet address.

# License

This project is licenced under not licenced

   

