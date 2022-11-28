import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { PluginOption } from 'vite'
import viteEslint from 'vite-plugin-eslint'
import setupHtml from './htmlPlugin'
import setupAutoImport from './autoImport'
import setupAutoComponents from './autoComponents'
import { setupIcons, setupSvgIcons } from './autoIcon'

const setupVitePlugin = (env: Partial<ImportMetaEnv>): PluginOption[] => {
  return [
    vue(),
    Unocss(),
    viteEslint(),
    setupHtml(env),
    setupIcons(env),
    setupAutoImport(),
    setupSvgIcons(env),
    setupAutoComponents(env)
  ]
}

export default setupVitePlugin
