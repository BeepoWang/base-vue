import { defineStore } from 'pinia'

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

export default useUserStore
