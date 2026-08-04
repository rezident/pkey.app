import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
    const isProd = command === 'build';

    return {
        plugins: [react()],
        resolve: {
            tsconfigPaths: true,
        },
        css: {
            modules: {
                generateScopedName: isProd
                    ? '[folder]_[hash:base64:5]'
                    : '[folder]__[local]_[hash:base64:5]',
            },
        },
    };
});
