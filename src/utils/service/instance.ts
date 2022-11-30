import { useUserStoreWithOut } from '@/store/modules/user'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from '../auth'
import { handleNetworkError } from './tools'

const user = useUserStoreWithOut()

// axios初始化
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  withCredentials: true
})

// axios 请求拦截
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    Authorization: `${getToken()}`
  }
  return config
})

// axios 响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse<BaseResponse>) => {
    if (response.status !== 200) return Promise.reject(response.data)
    const { responseCode } = response.data

    // 权限过期/无权限 --> 踢出
    if (responseCode === 401) {
      user.userLogout()
    }

    // 权限过期 --> 刷新token
    // if (response.data.responseCode === 400) {
    //   const config = await handleRefreshToken(response.config)
    //   if (config) {
    //     return instance.request(config)
    //   } else {
    //     user.userLogout()
    //   }
    // }

    return response
  },
  (error: AxiosError) => {
    if (error.status === 401 || error.status === 403) {
      user.userLogout()
    }
    handleNetworkError(error.status)
    Promise.reject(error.response)
  }
)

export { instance }
