module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@useCases': './src/useCases',
        '@repositories': './src/repositories',
        '@providers': './src/providers',
        '@middlewares': './src/middlewares',
        '@errors': './src/errors',
        '@entities': './src/entities'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
