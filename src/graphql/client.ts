import { GraphQLClient } from 'graphql-request'
import config from 'config'

const FUSESWAP_SUBGRAPH_URL: string = config.get('graph.fuseswapUrl')

export const fuseswapClient = new GraphQLClient(FUSESWAP_SUBGRAPH_URL)
