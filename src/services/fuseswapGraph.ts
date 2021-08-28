import { fuseswapClient } from 'graphql/client'
import { tokenPriceQuery } from 'graphql/queries'

export default {
  async getTokenPrice (address: string) {
    const query = tokenPriceQuery(address.toLowerCase())
    const data = await fuseswapClient.request(query)
    return data?.bundle?.ethPrice + data?.token?.derivedETH
  }
}
