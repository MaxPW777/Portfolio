import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

export default [
  {
    ignores: ['dist/', 'node_modules/', 'scripts/', '.eslintrc.js'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ['tsconfig.json'],
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'import': importPlugin,
      'unused-imports': unusedImportsPlugin,
      'prettier': prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          printWidth: 120,
          tabWidth: 2,
          singleAttributePerLine: true,
          bracketSameLine: false,
          htmlWhitespaceSensitivity: 'ignore',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/order': 'error',
      'no-else-return': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-irregular-whitespace': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      eqeqeq: 'error',
      'no-extra-bind': 'error',
      'block-spacing': ['error', 'always'],
      'no-console': 'warn',
      'no-useless-catch': 'error',
      'no-useless-return': 'error',
      'eol-last': ['error', 'always'],
    },
  },
];
