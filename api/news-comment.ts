import request from '@/utils/request'

const types = <any>{
  page: { url: 'news/article/comment/page' },
  child: { url: 'news/article/comment/child' },
  add: { url: 'news/article/comment/add' },
  update: { url: 'news/article/comment/update' },
  delete: { url: 'news/article/comment/delete' },
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
