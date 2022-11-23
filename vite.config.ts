import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { normalizePath } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';


const variablePath = normalizePath(path.resolve('./src/variable.scss'));

export default defineConfig({
  css: {
    // css module 配置
    modules: {
      // 其中，name 表示当前文件名，local 表示类名
      generateScopedName: "[name]__[local]___[hash:base64:5]"
    },
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    },
    // css预处理器配置
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}"`
      }
    }
  },
  plugins: [vue()]
})
