module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true
  },
  globals: {
    server: true
  },
  rules: {
  }
};
