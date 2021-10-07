import Web3 from 'web3'
import cubeAbi from '../abi/CubeRouter.json'
import erc20abi from '../abi/ERC20.json'

const hecoAddr = '0x867E9c9a4d3cbc772397eda69108e43C1B0D1669'
const oecAddr = '0xe444b78c2037da51f56C217CDdBdda45b2416aaf'
console.log('abi', cubeAbi)

// heco
const HecoProvider = new Web3(new Web3.providers.HttpProvider('https://http-testnet.hecochain.com'))
const HecoContract = new HecoProvider.eth.Contract(cubeAbi, hecoAddr)

//oec
const OecProvider = new Web3(new Web3.providers.HttpProvider('https://exchainrpc.okex.org'))
const OecContract = new OecProvider.eth.Contract(cubeAbi, oecAddr)



export { HecoContract, HecoProvider, OecContract, OecProvider, erc20abi, hecoAddr, oecAddr }
