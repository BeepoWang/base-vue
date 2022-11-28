/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_CLIENT: string
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_OUTPUT_DIR: string
  readonly VITE_ICON_PREFIX: string
  readonly VITE_ICON_LOCAL_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
