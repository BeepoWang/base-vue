import { piniaPersistentStorage } from '@/plugins/pinia'
import { createPinia } from 'pinia'
import { App } from 'vue'

const store = createPinia()

store.use(
  piniaPersistentStorage({
    key: 'Store',
    storageType: 'sessionStorage'
  })
)

export const setupStore = (app: App) => {
  app.use(store)
}

export * from './modules'
export default store
