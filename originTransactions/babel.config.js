module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@pages': './src/pages',
          '@theme': './src/theme',
          '@components': './src/components',
          '@modules': './src/modules',
          '@services': './src/modules/services',
          '@dtos': './src/modules/DTOs',
          '@libs': './src/modules/libs',
          '@routes': './src/routes',
        },
      },
    ],
  ],
};
