// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig(({ mode }) => {
//     const env = loadEnv(mode, process.cwd()); // load .env variables

//     return {
//         server: {
//             proxy: {
//                 '/task': env.VITE_API_URL,
//                 '/user': env.VITE_API_URL,
//             }
//         },
//         plugins: [react(), tailwindcss()],
//     };
// });







import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
    // const env = loadEnv(mode, process.cwd()); // load .env variables

    console.log()

    return {
        // server: {
        //     proxy: {
        //         '/task': "http://localhost:7892",
        //         '/user': "http://localhost:7892",
        //     }
        // },
        proxy: {
            '/task': {
                target: 'https://planify-full-stack.vercel.app',
                changeOrigin: true,
                secure: true,
            },
            '/user': {
                target: 'https://planify-full-stack.vercel.app',
                changeOrigin: true,
                secure: true,
            },
        },

        plugins: [react(), tailwindcss()],
    };
});



// // vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import fs from 'fs';
// import dotenv from 'dotenv';

// export default defineConfig(() => {
//     // Load custom .env file manually
//     const env = dotenv.parse(fs.readFileSync('.sample.env'));

//     return {
//         server: {
//             proxy: {
//                 '/task': env.VITE_API_URL,
//                 '/user': env.VITE_API_URL,
//             },
//         },
//         plugins: [react()],
//     };
// });