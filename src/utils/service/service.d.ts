interface BaseResponse<T = any> {
  responseCode: string | number
  responseMessage: string
  data: T
}

type BaseRequestResponse<T = any> = Promise<{ err: any; data: T | null }>
