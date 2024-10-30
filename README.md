## 小项目简介

ERC20 代币提供的功能包括
`1.初始代币 
`2.转移代币
`3.允许其他人代表代币持有者转移代币

连接 MetaMask 钱包

# 实现 ERC20 合约

approve
transferForm

-- 编写合约 GlD.sol 并编译 `npx hardhat compile`
-- 启动本地链确认 A、B 用户的地址 `npx hardhat node`

# 部署合约 deploy.js

-部署合约本地链上
`npx hardhat run test/deploy.js --network localhost`

初始化合约，给 A、B 两个账号分别分配 7 个、3 个代币
`1.a 账户初始有 10 个代币
`2.a 给 b 的账户转 3 个代币

# 前台合约交互

`1.切换到 A 的账户，授权给 B 账户可以从 A 账户转 3 个代币 
`2.切换到 B 的账户，从 A 账户里面转出 3 个代币到 B 账户

# 添加 vite+react front-前端和合约交互

`npx create-vite@latest front`
`npm install`

# 启动项目 vite+react

`npm run dev`

# 相关依赖包

`npm install @web3-react/core`
`npm install @web3-react/metamask`
`npm install eventemitter3`
`npm install @ethersproject/contracts`

# 测试注意事项

1. MetaMask 钱包 需要”添加网络“ hardhat 测试链信息
   配置 Hardhat 测试链信息
   网络名称：可以自定义，比如 “Hardhat Local Network”。
   新的 RPC URL：输入http://127.0.0.1:8545（这是 Hardhat 本地链的默认 RPC 地址）。
   链 ID：Hardhat 默认的链 ID 是 31337，可以填入 31337。
   货币符号：可以自定义，比如 “ETH”（如果模拟以太坊环境）。
   区块浏览器 URL：由于是本地测试链，一般没有对应的区块浏览器，可留空。

2. MetaMask 钱包 用户可以导入, hardhat 测试链用户
3. MetaMask 钱包 代币显示, 添加代币=>把部署的在本地链，合约地址复制即可
4. 项目中的账户、合约地址都是 hardhat 本地链上的信息，可自行修改
