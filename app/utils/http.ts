/// <reference path='../../global-plugin.d.ts' />
import { Toast } from '@ant-design/react-native'
import ajax, { RequestConfig, RequestTypeProps, XHRConfigProps } from './xhr'

const ajaxCount = 0
/** 跳过loading */
// function isPass (options: RequestConfig) {
//   const { url } = options
//   const index = filters.loading.findIndex((test) => {
//     const pattern = new RegExp(test)
//     if (pattern.test(url)) {
//       return true
//     }
//   })
//   return index > -1 ? true : false
// }
/** ajax请求前拦截 */
ajax.interceptors.request.use((x, ev, settings) => {
  // if (!isPass(settings)) {
  //   ajaxCount += 1
  //   if (ajaxCount > 0) {

  //   }
  // }
})
/** ajax响应后拦截 */
ajax.interceptors.response.use((response) => {
  /** 是否跳过loading */
  const { result, status } = response
  /** 401退出 */
  if (status === 401 || status === 200 && result.status === 401) {
    //
    return response
  }
  if (status !== 200 || status === 200 && result.status !== 200) {
    const pass = true
    const url = response.config.url
    /** 错误提示 */
    if (result.errors instanceof Array && pass) {
      const message: string[] = []
      result.errors.forEach((item: {message: string, code: string}) => {
        message.push(item.message)
      })
      Toast.info(message.join('，'))
    } else if (result.status && result.message) {
      Toast.info(result.message)
      response.status = result.status
    }
  }
  if (response.type === 'timeout') {
    Toast.fail('系统请求超时！')
  }
  return response
})

const http = <T = any>(
    url: string, type: XHRConfigProps | RequestTypeProps = 'GET',
    config?: XHRConfigProps
  ): Promise<T> => {
  // url = '/sys' + url
  let finalConfig: XHRConfigProps = {}
  if (typeof type !== 'string') {
    config = null
    config = type
    type = ((config as any).type || 'GET') as RequestTypeProps
  }
  if (config instanceof Array) {
    finalConfig.data = config
  } else {
    finalConfig = config || {}
  }
  finalConfig.headers = Object.assign({}, {
    token: '6ce5a721-7be6-48f6-8771-11cc481cce18.1560478629224',
    from: '4'
  }, finalConfig.headers)
  return ajax<T>(url, type, finalConfig).then((response) => {
    const { result } = response
    return result
  }, (err) => {
    return Promise.reject(err)
  })
}
export default http
