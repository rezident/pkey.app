import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';

export default defineConfig([
    globalIgnores(['dist', 'node_modules']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        plugins: {
            perfectionist,
        },
        rules: {
            'perfectionist/sort-imports': [
                'error',
                {
                    type: 'natural',
                    order: 'asc',
                    groups: [
                        'builtin', // 1. fs, path (Node.js)
                        'external', // 2. react, axios (npm packages)
                        'internal', // 3. Our aliases (~/**)
                        ['parent', 'sibling', 'index'], // 4. Relative paths (../, ./)
                        'unknown', // 5. Everything else
                        'side-effect', // 6. Imports without variables (e.g. import './polyfill')
                        'style', // 7. Styles (import './style.css')
                    ],

                    internalPattern: ['^~/.*'],
                },
            ],
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    },
    eslintConfigPrettier,
]);
