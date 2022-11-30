import { fetchNewToken } from '@/api/auth'
import { AxiosResponse } from 'axios'
import { getReToken, setReToken, setToken } from '../auth'

// 处理 http 网路错误
export function handleNetworkError(errStatus: any) {
  let errMessage = '未知错误'
  if (errStatus) {
    switch (errStatus) {
      case 400:
        errMessage = '错误的请求（400）'
        break
      case 401:
        errMessage = '未授权，请重新登录（401）'
        break
      case 403:
        errMessage = '拒绝访问（403）'
        break
      case 404:
        errMessage = '请求错误,未找到该资源（404）'
        break
      case 405:
        errMessage = '请求方法未允许（405）'
        break
      case 408:
        errMessage = '请求超时（408）'
        break
      case 500:
        errMessage = '服务器端出错（500）'
        break
      case 501:
        errMessage = '服务未实现（501）'
        break
      case 502:
        errMessage = '网络错误（502）'
        break
      case 503:
        errMessage = '服务不可用（503）'
        break
      case 504:
        errMessage = '网络超时（504）'
        break
      case 505:
        errMessage = 'http版本不支持该请求（505）'
        break
      default:
        errMessage = `连接错误 --${errStatus}`
    }
  } else {
    errMessage = `无法连接到服务器！`
  }
  console.log('errMessage', errMessage)
  // TODO:弹框提示错误信息
  window.alert(errMessage)
}

// 处理接口响应错误信息
export const handleRequestError = (responseCode: string | number, responseMsg: string) => {
  if (Number(responseCode) !== 0) {
    // TODO: 弹框提示错误信息
    // .....
    window.alert(responseMsg)
    console.log('errMessage', responseMsg)
    return false
  }
  return true
}

// 处理返回数据为数据流
export const handleBlobResponse = <T = any>(
  response: AxiosResponse
): Promise<{ err: any; data: null | T }> => {
  return new Promise((resolve) => {
    const fileReader = new FileReader()
    fileReader.readAsText(response.data)
    fileReader.onload = function () {
      try {
        // 判断数据流是否为普通对象数据
        const jsonData = JSON.parse(fileReader.result as string)
        if (jsonData?.responseCode !== 200) {
          // TODO: 弹框提示错误信息
          // ......
          window.alert(jsonData.responseMessage)
          resolve({ err: jsonData, data: null })
        }
      } catch (error) {
        // 处理Blob文件流数据
        resolve({ err: null, data: response.data })
      }
    }
  })
}

// 刷新token处理
export const handleRefreshToken = async (axiosConfig: any) => {
  const refreshToken = getReToken() || ''
  // 刷新token接口
  const { data } = await fetchNewToken({ refreshToken })
  if (data) {
    setToken(`${data.token}`)
    setReToken(data.refreshToken)
    const config = { ...axiosConfig }
    if (config.headers) {
      config.headers.Authorization = data.token
    }
    return config
  }
  return null
}
