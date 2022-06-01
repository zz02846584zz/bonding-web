import request from '@/utils/request'

const types = <any>{
  page: { url: 'collection/page' },
  add: { url: 'collection/add' },
  delete: { url: 'collection/delete' },
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
