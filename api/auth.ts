import request from '@/utils/request'

const types = <any>{
  login: {
    url: 'auth/login',
    fn: (data: any) => {
      console.log(data)
      console.log('tests')
    },
  },
  register: { url: 'auth/register' },
  captcha: { url: 'auth/captcha' },
  logout: { url: 'auth/logout' },
  forgot: { url: 'auth/forgot' },
}

const Api = <any>{}

for (const [key] of Object.entries(types)) {
  Api[key] = async (params: any) => {
    const data = <any>await request.post(types[key].url, params)
    if (types[key].fn && data?.message === 'success') {
      await types[key].fn(data)
    }
    return data
  }
}

export default Api
