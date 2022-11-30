import { http } from '@/utils/service'

export const fetchNewToken = (params: { refreshToken: string }) => {
  console.log('params', params)
  return http.get('', params, { showToast: false })
}
