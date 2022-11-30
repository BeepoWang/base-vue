import { clearToken } from '@/utils/auth'
import { defineStore } from 'pinia'
import store from '..'

interface UserState {
  userName: string
}

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      userName: 'Test'
    }
  },
  actions: {
    async userLogout() {
      clearToken()
    }
  },
  getters: {}
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
export default useUserStore
