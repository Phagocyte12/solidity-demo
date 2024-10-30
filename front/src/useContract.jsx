import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';
import { useState } from 'react';

import ABI from '../../artifacts/contracts/GLD.sol/GLD.json';
const tokenAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const a = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const b = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

export function useContract() {
  const { provider, connector, account } = useWeb3React();
  const [balance, setBalance] = useState(0);

  // 切换到A的账户，授权B账户可以从A的账户转3个代币
  const approve = async () => {
    const signer = provider.getSigner();
    if (!provider) {
      return;
    }
    const contract = new Contract(tokenAddress, ABI.abi, signer);
    await contract.approve(b, 3);
  };

  // 切换到B的账户上，从A里面转3个代币到B账户
  const transfer = async () => {
    const signer = provider.getSigner();
    if (!provider) {
      return;
    }
    const contract = new Contract(tokenAddress, ABI.abi, signer);
    await contract.transferFrom(a, b, 2);
  };

  // 查询余额
  const balanceOf = async () => {
    const signer = provider.getSigner();
    if (!provider) {
      return;
    }
    const contract = new Contract(tokenAddress, ABI.abi, signer);
    const balance = await contract.balanceOf(account);
    setBalance(balance.toString());
    console.log('balance', balance.toString());
    console.log('account=>', account);
  };

  return {
    transfer,
    approve,
    balanceOf,
    balance
  };
}
