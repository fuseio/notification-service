import { Request, Response, Router } from 'express'
import apiV1 from './api/v1'

const router = Router()

router.use('/api/v1', apiV1)

router.get('/is_running', (req: Request, res: Response) => {
  res.send({ response: 'ok' })
})

module.exports = router
