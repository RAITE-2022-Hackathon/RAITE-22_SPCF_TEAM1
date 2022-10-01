import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
const { createVuePlugin } = require('vite-plugin-vue2');
import path from 'path';

export default defineConfig({
    plugins: [
        createVuePlugin(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    }
});
