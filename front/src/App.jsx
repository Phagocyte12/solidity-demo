import './App.css';
import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { useContract } from './useContract';

function App() {
  const { isActive, account, connector, provider } = useWeb3React();
  const { approve, transfer, balanceOf, balance } = useContract();

  useEffect(() => {
    setTimeout(() => {
      const active = connector.activate();
      active.then((r) => {
        console.log('active', r);
      });
    }, 1000);
  }, [provider, connector, account]);

  return (
    <>
      {isActive ? 'active' : 'not active'}&nbsp;&nbsp; 连接MetaMask: &nbsp;&nbsp;
      <button
        onClick={async () => {
          await connector.activate();
          console.log('active', provider);
        }}
      >
        connect
      </button>
      <br />
      <br />
      切换A的账户,授权B账户: &nbsp;&nbsp;
      <button
        onClick={async () => {
          await approve();
        }}
      >
        approve
      </button>
      <br />
      <br />
      切换B账户账户,A账户转3代币给B账户: &nbsp;&nbsp;
      <button
        onClick={async () => {
          await transfer();
        }}
      >
        transfer
      </button>
      <br />
      <br />
      <div>
        查询当前账户代币:&nbsp;&nbsp;
        <button onClick={balanceOf}>balanceOf</button>
        &nbsp;{balance}
      </div>
    </>
  );
}

export default App;
