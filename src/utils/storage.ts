const nameSpace = 'base-vue'

// localStorage 封装

const getLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem(nameSpace) || '{}')
}

const setLocalItem = (key: string | number, value: any) => {
  const storage = getLocalStorage()
  storage[key] = value
  window.localStorage.setItem(nameSpace, JSON.stringify(storage))
}

const getLocalItem = (key: string | number) => {
  const storage = getLocalStorage()
  return storage[key]
}

const clearLocalItem = (key: string | number) => {
  const storage = getLocalStorage()
  delete storage[key]
  window.localStorage.setItem(nameSpace, JSON.stringify(storage))
}

export const clearLocalAll = () => {
  window.localStorage.clear()
}

// sessionStorage 封装
const getSessionStorage = () => {
  return JSON.parse(window.sessionStorage.getItem(nameSpace) || '{}')
}

const setSessionItem = (key: string | number, value: any) => {
  const storage = getSessionStorage()
  storage[key] = value
  window.sessionStorage.setItem(nameSpace, JSON.stringify(storage))
}

const getSessionItem = (key: string | number) => {
  const storage = getSessionStorage()
  return storage[key]
}

const clearSessionItem = (key: string | number) => {
  const storage = getSessionStorage()
  delete storage[key]
  window.sessionStorage.setItem(nameSpace, JSON.stringify(storage))
}

const clearSessionAll = () => {
  window.sessionStorage.clear()
}

export const sessionStorage = {
  setItem: setSessionItem,
  getItem: getSessionItem,
  clearItem: clearSessionItem,
  clearAll: clearSessionAll
}

export const localStorage = {
  setItem: setLocalItem,
  getItem: getLocalItem,
  clearItem: clearLocalItem,
  clearAll: clearLocalAll
}
