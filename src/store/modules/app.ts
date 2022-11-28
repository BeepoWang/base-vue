import { defineStore } from 'pinia'

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

export default useAppStore
