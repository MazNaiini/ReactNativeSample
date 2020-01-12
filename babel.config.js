module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          atoms: './src/components/atoms',
          molecules: './src/components/molecules',
          organisms: './src/components/organisms',
          navigations: './src/navigations',
          screens: './src/screens',
          services: './src/services',
          styles: './src/styles',
          utils: './src/utils',
        },
      },
    ],
  ],
};
