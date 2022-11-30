import { AxiosRequestConfig } from 'axios'
import { instance } from './instance'
import { handleBlobResponse, handleRequestError } from './tools'

interface BaseRequest extends AxiosRequestConfig {
  loading?: boolean // loading 状态
  showToast?: boolean // 是否展示错误提示
}

const request = <T>(config: BaseRequest): BaseRequestResponse<T> => {
  return new Promise((resolve) => {
    const { showToast = true } = config
    console.log('showToast', showToast)
    instance.request(config as AxiosRequestConfig).then(async (res) => {
      if (res.data instanceof Blob) {
        const data = await handleBlobResponse(res)
        console.log('data0', data)
        resolve(data)
      } else {
        if (res.data.responseCode === 0) {
          resolve({ err: null, data: { ...res.data.data } })
        } else {
          config.showToast && handleRequestError(res.data.responseCode, res.data.responseMessage)
          resolve({ err: res.data, data: null })
        }
      }
    })
  })
}

const http = {
  // Get 方法
  get: <T = any, U = any>(
    url: string,
    params?: U,
    config?: BaseRequest
  ): BaseRequestResponse<T> => {
    return request({ showToast: true, ...config, url, params, method: 'GET' })
  },
  // Post 方法
  post: <T = any, U = any>(url: string, data?: U, config?: BaseRequest): BaseRequestResponse<T> => {
    return request({ ...config, url, data, method: 'POST' })
  },
  // Put 方法
  put: <T = any, U = any>(url: string, data?: U, config?: BaseRequest): BaseRequestResponse<T> => {
    return request({ ...config, url, data, method: 'PUT' })
  },
  // Delete 方法
  delete: <T = any, U = any>(
    url: string,
    params?: U,
    config?: BaseRequest
  ): BaseRequestResponse<T> => {
    return request({ ...config, url, params, method: 'DELETE' })
  }
}

export { request, http }
export type { BaseRequest, AxiosRequestConfig }
