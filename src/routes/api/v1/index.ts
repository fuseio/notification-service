import { Router } from 'express'
import webhooksRouter from './webhooks'

const router = Router()

router.use('/webhooks', webhooksRouter)

export default router
