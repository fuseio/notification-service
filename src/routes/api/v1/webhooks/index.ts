import webhooks from '@controllers/webhooks'
import { Router } from 'express'

const router = Router()

router.post('/token-transfers', webhooks.tokenTransfer)

export default router
