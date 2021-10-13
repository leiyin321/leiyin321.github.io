import Web3 from 'web3'
import cubeAbi from '../abi/CubeRouter.json'
import erc20abi from '../abi/ERC20.json'
import cubePollAbi from '../abi/CubePool.json'
import signAbi from '../abi/Sign.json'

const hecoAddr = '0x2fAd0985c01aE3712CcBE472603a53E4742Ae602'
const oecAddr = '0xC55DF71398ba18d1d5E6E3060685EFa8219D4CE0'
const ethAddr = '0x3c9bE138411FBB681f1dAAC907241D85EE0a6839'
const signAddr = '0x57b3f0F4126979ce7DF7A8F035d4Cb195Cbf46d5'

// heco
const HecoProvider = new Web3(new Web3.providers.HttpProvider('https://http-testnet.hecochain.com'))
const HecoContract = new HecoProvider.eth.Contract(cubeAbi, hecoAddr)

//oec
const OecProvider = new Web3(new Web3.providers.HttpProvider('https://exchaintestrpc.okex.org'))
const OecContract = new OecProvider.eth.Contract(cubeAbi, oecAddr)

//eth
const EthProvider = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'))
const EthContract = new EthProvider.eth.Contract(cubeAbi, ethAddr)

//sign
const SignProvider = new Web3(new Web3.providers.HttpProvider('https://http-testnet.hecochain.com'))
const SignContract = new SignProvider.eth.Contract(signAbi, signAddr)



export { HecoContract, HecoProvider, OecContract, OecProvider, erc20abi, hecoAddr, oecAddr, ethAddr, EthProvider, EthContract, cubePollAbi, SignProvider, SignContract }
