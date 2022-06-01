import request from '@/utils/request'

const types = <any>{
  list: { url: 'news/article/list' },
  page: { url: 'news/article/page' },
  info: { url: 'news/article/info' },
  category: { url: 'news/article/categoryList' },
  like: { url: 'news/article/like' },
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
