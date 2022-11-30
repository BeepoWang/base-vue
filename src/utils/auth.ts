import Cookies from 'js-cookie'
// 存储token
const TOKEN_KEY = 'Token'
export const getToken = () => Cookies.get(TOKEN_KEY)
export const setToken = (value: string) => Cookies.set(TOKEN_KEY, value)
export const clearToken = () => Cookies.remove(TOKEN_KEY)

// 存储Refresh tokens
const REFRESH_KEY = 'refresh'
export const getReToken = () => Cookies.get(REFRESH_KEY)
export const setReToken = (value: string) => Cookies.set(REFRESH_KEY, value)
export const clearReToken = () => Cookies.remove(REFRESH_KEY)
