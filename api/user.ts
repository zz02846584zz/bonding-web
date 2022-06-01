import request from '@/utils/request'

const types = <any>{
  person: { url: 'user/person' },
  update: { url: 'user/update' },
  resetPassword: { url: 'user/reset-password' },
  identityCert: { url: 'user/identity-cert' },
  bindingEmail: { url: 'user/binding/email' },
  delete: { url: 'user/delete' },
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
