import { createHtmlPlugin } from 'vite-plugin-html'

const setupHtml = (env: Partial<ImportMetaEnv>) => {
  const { VITE_APP_TITLE } = env
  return createHtmlPlugin({
    minify: true,
    entry: 'src/main.ts',
    template: 'index.html',
    inject: {
      data: {
        title: VITE_APP_TITLE
      }
    }
  })
}

export default setupHtml
