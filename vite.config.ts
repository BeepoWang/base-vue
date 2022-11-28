import vue from '@vitejs/plugin-vue'
import path from 'path'
import Unocss from 'unocss/vite'
import { defineConfig, normalizePath } from 'vite'
import viteEslint from 'vite-plugin-eslint'

const variablePath = normalizePath(path.resolve('./src/variable.scss'))

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    modules: {
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    // css预处理器配置
    preprocessorOptions: {}
  },
  plugins: [vue(), viteEslint(), Unocss()]
})
