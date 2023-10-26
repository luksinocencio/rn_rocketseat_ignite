module.exports = {
  root: true,
  extends: ['@react-native'],
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  settings: {
    'import/resolver': {
      'babel-module': { allowExistingDirectories: true },
    },
  },
  plugins: ['module-resolver'],
  rules: {
    'module-resolver/use-alias': 2,
  },
}
