'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const module_alias_1 = __importDefault(require('module-alias'))
const path_1 = __importDefault(require('path'))
module_alias_1.default.addAliases({
  '@constants': path_1.default.join(__dirname, '..', '/constants'),
  '@models': path_1.default.join(__dirname, '..', '/models'),
  '@routes': path_1.default.join(__dirname, '..', '/routes'),
  '@utils': path_1.default.join(__dirname, '..', '/utils'),
  '@services': path_1.default.join(__dirname, '..', '/services'),
  '@controllers': path_1.default.join(__dirname, '..', '/controllers')
})
