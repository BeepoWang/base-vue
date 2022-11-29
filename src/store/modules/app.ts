import { defineStore } from 'pinia'
import store from '..'

interface AppState {
  system: string
}

const useAppStore = defineStore('App', {
  state: (): AppState => {
    return {
      system: ''
    }
  },
  actions: {},
  getters: {}
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
export default useAppStore
