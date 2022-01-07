module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  extends: [
    'airbnb-base',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react'],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    indent: 0,
    'linebreak-style': ['off'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-use-before-define': 'off',
    camelcase: 'off',
    'import/no-unresolved': 'off',
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'no-console': 'off',
    'max-len': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/no-onchange': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'import/prefer-default-export': 0,
    curly: 'off',
    'nonblock-statement-body-position': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'eol-last': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['*', '.js', '.jsx'],
      },
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
