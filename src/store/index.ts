import { piniaPersistentStorage } from '@/plugins/pinia'
import { createPinia } from 'pinia'
import { App } from 'vue'

const store = createPinia()

store.use(
  piniaPersistentStorage({
    key: 'store',
    storeList: [
      {
        storageType: 'sessionStorage',
        storeName: ['User'],
        stateItems: []
      }
    ]
  })
)

export * from './modules'

export const setupStore = (app: App) => {
  app.use(store)
}

export default store
