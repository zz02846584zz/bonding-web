import axios from 'axios'

/**
 * @instance axios 實體，方便進行 config 及攔截器的管理
 */
const request = axios.create({
  baseURL: '/api',
  // timeout: 5000,
})

request.interceptors.request.use(
  function (config) {
    // if (i18n.global.locale.value === 'en') {
    //   config.url += `?language=en-US`
    //   // config.url = config.url + `?language=${i18n.global.locale.value.replace(/[-]../gi, (e) => e.toUpperCase())}`
    // }
    // if (config.data) {
    //   const formData = new FormData()
    //   for (const [key, value] of Object.entries(config.data)) {
    //     formData.append(key, value)
    //   }
    //   config.data = formData
    //   config.method = 'POST'
    // }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    // const matchUserApiPath = response.config.url.match('user/info')
    // if (response.data.error === 10002 && !matchUserApiPath) {
    //   message({
    //     content: response.data.msg,
    //   })
    //   router.replace('/login')
    // }
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default request
