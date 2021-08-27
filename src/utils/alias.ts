import moduleAlias from 'module-alias'
import path from 'path'

moduleAlias.addAliases({
  '@constants': path.join(__dirname, '..', '/constants'),
  '@models': path.join(__dirname, '..', '/models'),
  '@routes': path.join(__dirname, '..', '/routes'),
  '@utils': path.join(__dirname, '..', '/utils'),
  '@services': path.join(__dirname, '..', '/services'),
  '@controllers': path.join(__dirname, '..', '/controllers')
})
