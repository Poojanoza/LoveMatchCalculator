import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin'; // The actual plugin
import tsParser from '@typescript-eslint/parser';        // The parser for TypeScript

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Files that ESLint should check
    languageOptions: {
      parser: tsParser,              // Use the TypeScript parser
      parserOptions: {
        project: './tsconfig.json',  // Required to get type info from tsconfig
        ecmaVersion: 2020,           // ECMAScript features to parse
        sourceType: 'module',        // Use 'module' for ES module imports
      },
      globals: globals.browser,      // Browser global variables like 'window'
    },
    rules: {
      // Override/add rules here
      'no-console': 'warn',                   // Example: Warn when console.log is used
      '@typescript-eslint/explicit-function-return-type': 'off',  // Example: Disable requiring explicit return types
    },
  },
  pluginJs.configs.recommended,      // Add recommended rules from ESLint core
  tseslint.configs.recommended,      // Add recommended rules for TypeScript
];
