import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import setupVitePlugin from './src/plugins/vite'

export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd())

  return {
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
    plugins: setupVitePlugin(env),
    server: {
      host: true
    },
    build: {
      outDir: env.VITE_OUTPUT_DIR,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isBuild ? true : false,
          drop_debugger: isBuild ? true : false
        }
      },
      chunkSizeWarningLimit: 1500
    }
  }
})
