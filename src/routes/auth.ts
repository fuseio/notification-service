import jwt from 'express-jwt'
import config from 'config'

const secret: string = config.get('api.secret')

const auth = {
  required: jwt({
    secret: secret,
    credentialsRequired: true,
    algorithms: []
  }),
  optional: jwt({
    secret: secret,
    credentialsRequired: false,
    algorithms: []
  })
}

module.exports = auth
