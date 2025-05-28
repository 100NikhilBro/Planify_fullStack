import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd()); // load .env variables

    return {
        server: {
            proxy: {
                '/task': env.VITE_API_URL,
                '/user': env.VITE_API_URL,
            }
        },
        plugins: [react(), tailwindcss()],
    };
});