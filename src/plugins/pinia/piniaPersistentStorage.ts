import { PiniaPluginContext } from 'pinia'
import { sessionStorage, localStorage } from '@/utils/storage'
import { toRaw } from 'vue'

interface StoreStorageItems {
  storeName: [string] // store名称
  storageType: 'sessionStorage' | 'localStorage' // 存储位置 localStorage/sessionStorage
  stateItems: [] // 需要缓存 state 字段，为空则全量缓存
}

interface PiniaPluginOptions {
  key: string // 缓存空间名称
  storeList: StoreStorageItems[] // 缓存store 配置列表
}

const storageMap = {
  sessionStorage: sessionStorage,
  localStorage: localStorage
}

export const piniaPersistentStorage = (options: PiniaPluginOptions) => {
  console.log('options ', options);
  const { key, storeList } = options

  return (context: PiniaPluginContext) => {
    const { store } = context
    let obj: Record<string, any> = {}
    for (const item of storeList) {
      if (item.storeName.includes(store.$id)) {
        const { storeName, stateItems, storageType } = item
        const data = storageMap[storageType].getItem(`${key ?? 'pinia'}-${store.$id}`)
        if (data) {
          store.$patch(data)
        }

        if (stateItems && stateItems.length > 0) {
          if (storeName.length === 1) {
            stateItems.forEach((item) => {
              obj[item] = store.$state[item]
            })
            obj = stateItems && stateItems.length > 0 ? obj : store.$state
          } else {
            return new Error('配置stateItems时只允许配置一个storeName')
          }
        }
        // 如果设置 部分缓存,
        console.log('obj', obj);
        // obj = stateItems && stateItems.length > 0 ? obj : store.$state
        storeName.includes(store.$id) &&
          store.$subscribe(() => {
            storageMap[storageType].setItem(`${key ?? 'pinia'}-${store.$id}`, toRaw(obj))
          })
      }
    }
  }
}
