import { defineStore } from 'pinia'
import store from '..'

interface UserState {
  token: string
  userName: string
}

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: '',
      userName: 'Test'
    }
  },
  actions: {},
  getters: {}
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
export default useUserStore
