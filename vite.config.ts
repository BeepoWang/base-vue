import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { defineConfig, normalizePath } from 'vite';
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'


const variablePath = normalizePath(path.resolve('./src/variable.scss'));

export default defineConfig({
  css: {
    // css module 配置
    modules: {
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    // css预处理器配置
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}"`
      }
    }
  },
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    })
  ]
})
