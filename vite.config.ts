import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    server: {
        open: true
    },
    plugins: [react(), tailwindcss()],
    base: '/ball-model-web/',
    build: {
        outDir: 'docs',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
