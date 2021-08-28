import { FUSD, WFUSE } from '@constants/index'
import provider from '@services/provider'
import { ethers } from 'ethers'
import { NextFunction, Request, Response } from 'express'
import ERC20_ABI from '@constants/abi/erc20.json'
import { formatEther, formatUnits } from '@ethersproject/units'
import fuseswapGraph from '@services/fuseswapGraph'
import config from 'config'
import http from '@services/http'

export default {
  async tokenTransfer (req: Request, res: Response, next: NextFunction) {
    try {
      const { address, from } = req.body
      const balanceUSDLimit: number = config.get('balanceUSDLimit')
      const slackUrl: string = config.get('slack.url')

      if (address.toLowerCase() === FUSD) {
        const contract = new ethers.Contract(address, ERC20_ABI, provider)
        const balance = await contract.balanceOf(from)
        const decimals = await contract.decimals()

        const price = await fuseswapGraph.getTokenPrice(address)
        const balanceUSD = Number(formatUnits(balance, decimals)) * price

        if (balanceUSD < balanceUSDLimit) {
          http.post(slackUrl, { message: `Account: ${from} less than $${balanceUSDLimit} left.` })
        }
      } else {
        const balance = await provider.getBalance(from)
        const price = await fuseswapGraph.getTokenPrice(WFUSE)
        const balanceUSD = Number(formatEther(balance)) * price

        if (balanceUSD < balanceUSDLimit) {
          http.post(slackUrl, { message: `Account: ${from} less than $${balanceUSDLimit} left.` })
        }
      }
    } catch (e) {
      next(e)
    }
  }
}
