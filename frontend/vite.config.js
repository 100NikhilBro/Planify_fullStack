import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/task': "http://localhost:7892",
            "/user": "http://localhost:7892"
        }
    },
    plugins: [react(), tailwindcss()],
})