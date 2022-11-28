import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const localIconPath = 'src/assets/svg-icon'

const setupIcons = (env: Partial<ImportMetaEnv>) => {
  const { VITE_ICON_LOCAL_PREFIX, VITE_ICON_PREFIX } = env

  const collectionName = VITE_ICON_LOCAL_PREFIX!.replace(
    `${VITE_ICON_PREFIX}-`,
    ''
  )
  return Icons({
    compiler: 'vue3',
    customCollections: {
      [collectionName]: FileSystemIconLoader(localIconPath)
    },
    scale: 1,
    defaultClass: 'inline-block'
  })
}

const setupSvgIcons = (env: Partial<ImportMetaEnv>) => {
  const { VITE_ICON_LOCAL_PREFIX } = env

  return createSvgIconsPlugin({
    iconDirs: [localIconPath],
    symbolId: `${VITE_ICON_LOCAL_PREFIX}-[dir]-[name]`,
    customDomId: '__SVG_ICON_LOCAL__'
  })
}
export { setupIcons, setupSvgIcons }
