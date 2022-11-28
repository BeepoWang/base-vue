import AutoImport from 'unplugin-auto-import/vite'

const setupAutoImport = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: ['vue', 'pinia', 'vue-router'],
    eslintrc: {
      enabled: false,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    }
  })
}

export default setupAutoImport
