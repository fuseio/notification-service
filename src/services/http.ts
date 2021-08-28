import axios from 'axios'

export default {
  post (url: string, data?: any) {
    return axios.post(url, data)
  }
}
