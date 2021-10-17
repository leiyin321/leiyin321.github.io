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
    blockExplorerUrls: ['https://www.oklink.com/okexchain'],
    provider: OecProvider,
    contract: OecContract,
    router_addr: oecAddr
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
    router_addr: oecAddr
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
    provider: HecoProvider,
    contract: HecoContract,
    router_addr: hecoAddr
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
    router_addr: hecoAddr
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
    provider: HecoProvider,
    contract: HecoContract,
    router_addr: hecoAddr
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
    provider: HecoProvider,
    contract: HecoContract,
    router_addr: hecoAddr
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

export { chains_params, SignContract, erc20abi, cubePollAbi }
