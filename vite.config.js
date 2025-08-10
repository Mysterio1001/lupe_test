import { defineConfig } from 'vite';
import { resolve } from 'path';




export default defineConfig({
  // Your base path
  base: '/altron-v2.1/', 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        products: resolve(__dirname, 'products.html'),
        support: resolve(__dirname, 'support.html'),
        industries: resolve(__dirname, 'industries.html'),
        contact: resolve(__dirname, 'contact.html'),
        login: resolve(__dirname, 'login.html'),
      },
    }, 
  },
  // 將 publicDir 指向你的 src/assets 資料夾
  // publicDir: 'src/assets',

});
