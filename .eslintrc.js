// eslint-disable-next-line no-undef
module.exports = {
    'parser': '@typescript-eslint/parser',
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'react/prop-types': 0,
        'comma-dangle': ['error', 'never'],
        'no-unused-vars': 0
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
