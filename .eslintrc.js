module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        'prettier/prettier': 2,
        'no-console': 1,
        'no-var': 'error',
        'prefer-const': 'error'
    }
};