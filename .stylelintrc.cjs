module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended'
  ],
  customSyntax: 'postcss-html',
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
    'dist/*'
  ],
  rules: {
    'prettier/prettier': true
  }
}
