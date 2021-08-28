import config from 'config'
import ethers from 'ethers'

const provider = new ethers.providers.JsonRpcProvider(config.get('rpcUrl'))

export default provider
