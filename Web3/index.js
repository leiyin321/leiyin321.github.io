import Web3 from 'web3'
import cubeAbi from '../abi/CubeRouter.json'
import erc20abi from '../abi/ERC20.json'

const hecoAddr = '0xA1807b02EA107045d1C5Ef868294881Cd9b20A6c'
const oecAddr = '0x17971AC1D2830C1AB84a2259585436c5c69C6E4d'
const ethAddr = '0xbe0b2ab4b7b178040976ee21bd86160E5CEDA34d'


// heco
const HecoProvider = new Web3(new Web3.providers.HttpProvider('https://http-testnet.hecochain.com'))
const HecoContract = new HecoProvider.eth.Contract(cubeAbi, hecoAddr)

//oec
const OecProvider = new Web3(new Web3.providers.HttpProvider('https://exchainrpc.okex.org'))
const OecContract = new OecProvider.eth.Contract(cubeAbi, oecAddr)

//eth
const EthProvider = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'))
const EthContract = new EthProvider.eth.Contract(cubeAbi, oecAddr)



export { HecoContract, HecoProvider, OecContract, OecProvider, erc20abi, hecoAddr, oecAddr, ethAddr, EthProvider, EthContract }
