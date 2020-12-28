import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://192.168.124.61:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
      return config
    },
    error => {
    })

  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
  })

  return instance(config)
}
