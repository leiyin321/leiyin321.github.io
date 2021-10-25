import Web3 from 'web3'
import cubeAbi from '../abi/CubeRouter.json'
import erc20abi from '../abi/ERC20.json'
import cubePollAbi from '../abi/CubePool.json'
import airDropAbi from '../abi/Airdrop.json'
import signAbi from '../abi/Sign.json'
import boardAbi from '../abi/BoardRoom.json'

const hecoAddr = '0x60d1b0a14485c92fFdedDFC126d82375787C7982'
const oecAddr = '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15'
const ethAddr = '0x4ecdBD14bdD5e7398C9Ff7Dc30287D6AFd7764ee'

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

const chains_params = {
  66: {
    chainId: '0x42',
    chainName: 'OEC Mainnet',
    nativeCurrency: {
      name: 'OKT',
      symbol: 'OKT',
      decimals: 18
    },
    rpcUrls: ['https://exchainrpc.okex.org'],
    blockExplorerUrls: ['https://www.oklink.com/okexchain']
  },
  65: {
    chainId: '0x41',
    chainName: 'OEC Testnet',
    nativeCurrency: {
      name: 'OKT',
      symbol: 'OKT',
      decimals: 18
    },
    rpcUrls: ['https://exchaintestrpc.okex.org'],
    blockExplorerUrls: ['https://www.oklink.com/okexchain-test/'],
    provider: OecProvider,
    contract: OecContract,
    cubeAddr: oecAddr,
    airDropAddr: '0xD5D8CB25faEF40ca2ED01440811504472Ca93e26',
    boardRoomAddr: '0xc030Fd0383D72b7dC3f11Ce666C48f7f69adb113'
  },
  56: {
    chainId: '0x38',
    chainName: 'BSC Mainnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed1.binance.org:443'],
    blockExplorerUrls: ['https://bscscan.com/']
  },
  97: {
    chainId: '0x61',
    chainName: 'BSC Testnet',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com/']
  },
  128: {
    chainId: '0x80',
    chainName: 'HECO Mainnet',
    nativeCurrency: {
      name: 'HT',
      symbol: 'HT',
      decimals: 18
    },
    rpcUrls: ['https://http-mainnet-node.huobichain.com'],
    blockExplorerUrls: ['https://hecoinfo.com'],
  },
  256: {
    chainId: '0x100',
    chainName: 'HECO Testnet',
    nativeCurrency: {
      name: 'HT',
      symbol: 'HT',
      decimals: 18
    },
    rpcUrls: ['https://http-testnet.hecochain.com'],
    blockExplorerUrls: ['https://testnet.hecoinfo.com'],
    provider: HecoProvider,
    contract: HecoContract,
    cubeAddr: hecoAddr
  },
  1: {
    chainId: '0x01',
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://etherscan.io'],
  },
  4: {
    chainId: '0x04',
    chainName: 'Rinkeby Testnet',
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://rinkeby.etherscan.io'],
    provider: EthProvider,
    contract: EthContract,
    cubeAddr: ethAddr,
    airDropAddr: '0xBF93b66EEC51Cb9C59eCA46EE69c533bEB9b824c',
    boardRoomAddr: '0x4E9F8807032D4e5E6f0561f898AbBEA010dc6eC9'
  },
  137: {
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
    blockExplorerUrls: ['https://polygonscan.com/']
  },
  80001: {
    chainId: '0x13881',
    chainName: 'Matic Testnet',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://rpc-mumbai.matic.today'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/']
  }
}

export { chains_params, SignContract, erc20abi, cubePollAbi, airDropAbi, boardAbi }
