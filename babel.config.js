module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@stores': './src/stores',
          '@assets': './src/assets',
          '@api': 'src/api',
          '@routers': './src/routers',
          '@commonStyle': './src/commonStyle',

          
        },
      },
    ],
  ],
};
