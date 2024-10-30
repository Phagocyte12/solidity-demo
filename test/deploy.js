const hre = require('hardhat');

const a = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const b = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';

async function deploy() {
  // 获取合约 GLD
  const GLD = await hre.ethers.getContractFactory('GLD');
  // 初始账户10代币
  const gld = await GLD.deploy(10);

  console.log(`Deployed contract to: ${gld.target}`);

  // 转账给 b初始账户3代币
  await gld.transfer(b, 3);

  const balancea = await gld.balanceOf(a);
  const balanceb = await gld.balanceOf(b);
  console.log('balancea', balancea.toString());
  console.log('balanceb', balanceb.toString());
}

async function main() {
  await deploy();
}

main();
