import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

const setupAutoComponents = (env: Partial<ImportMetaEnv>) => {
  const { VITE_ICON_LOCAL_PREFIX, VITE_ICON_PREFIX } = env

  const collectionName = VITE_ICON_LOCAL_PREFIX!.replace(
    `${VITE_ICON_PREFIX}-`,
    ''
  )

  return Components({
    dts: 'types/components.d.ts',
    resolvers: [
      IconsResolver({
        customCollections: [collectionName],
        componentPrefix: env.VITE_ICON_PREFIX
      })
    ]
  })
}

export default setupAutoComponents
