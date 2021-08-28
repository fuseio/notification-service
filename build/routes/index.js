'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = require('express')
const v1_1 = __importDefault(require('./api/v1'))
const router = (0, express_1.Router)()
router.use('/api/v1', v1_1.default)
router.get('/is_running', (req, res) => {
  res.send({ response: 'ok' })
})
module.exports = router
