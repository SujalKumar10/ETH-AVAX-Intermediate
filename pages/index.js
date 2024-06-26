import {useState, useEffect} from "react";
import {ethers} from "ethers";
import wallet_abi from "../artifacts/contracts/Assessment.sol/wallet.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [address, setAddress] = useState(undefined);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const walletABI = wallet_abi.abi;

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({method: "eth_accounts"});
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    getWalletContract();
  };

  const getWalletContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const walletContract = new ethers.Contract(contractAddress, walletABI, signer);
 
    setWallet(walletContract);
  }

  const getBalance = async() => {
    if (wallet) {
      setBalance((await wallet.CheckBalance()).toNumber());
    }
  }

  const deposit = async() => {
    if (wallet) {
      let tx = await wallet.deposit(10);
      await tx.wait()
      getBalance();
    }
  }

  const withdraw = async() => {
    if (wallet) {
      let tx = await wallet.withdraw(10);
      await tx.wait()
      getBalance();
    }
  }

  const changeHandler = () =>{
    setAddress(event.target.value);
  }

  const transfer = async() => {
    if(wallet){
      let tx = await wallet.transfer(address,10);
      await tx.wait()
      getBalance();
    }
  }

  const Wallet_ID = async() => {
    if(wallet){
      await wallet.Wallet_ID();
      getBalance();
    }
  }

  const initUser = () => {
    
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }



    return (
      <div>
        <p>Your Account: {account}</p>
        <button onClick={getBalance}>Check Balance</button>
        <p>Your Balance: {balance}</p>
        <button onClick={Wallet_ID}>create wallet</button>
        <button onClick={deposit}>Deposit 10 token</button>
        <button onClick={withdraw}>Withdraw 10 token</button>
        <label>account address:<input value = {address} onChange = {changeHandler}/></label> 
        <button onClick={transfer}>Transfer 10 token</button>
      </div>
    )
  }

  useEffect(() => {getWallet();}, []);

  return (
    <main className="container">
      <header><h1>Wallet Manager contract</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}
