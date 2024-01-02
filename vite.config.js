import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

/* if you're using React */
// import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        /* react(), // if you're using React */
        symfonyPlugin(),
        vue(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: "./assets/app.js",
                main: "./assets/main.js",
                
            },
        }
    },
});
