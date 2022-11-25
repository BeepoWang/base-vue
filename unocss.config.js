import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex items-center'
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then((i) => i.default)
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      },
      cdn: 'https://esm.sh/'
    })
  ]
})
