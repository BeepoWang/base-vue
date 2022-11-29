import { localStorage, sessionStorage } from '@/utils/storage'
import { PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'

interface PiniaPluginOptions {
  key: string // 缓存空间名称
  storageType: 'sessionStorage' | 'localStorage' // 缓存store 配置列表
}

const storageMap = {
  sessionStorage: sessionStorage,
  localStorage: localStorage
}

export const piniaPersistentStorage = (options: PiniaPluginOptions) => {
  return (context: PiniaPluginContext) => {
    const { store } = context

    const itemKey = `${options.key ?? 'Pinia'}-${store.$id}`

    const data = storageMap[options.storageType].getItem(itemKey)
      ? JSON.parse(storageMap[options.storageType].getItem(itemKey) as string)
      : {}

    store.$subscribe(() => {
      storageMap[options.storageType].setItem(itemKey, JSON.stringify(toRaw(store.$state)))
    })

    return {
      ...store.$state,
      ...data
    }
  }
}
