import { fileURLToPath, URL } from 'node:url'
import qiankun from 'vite-plugin-qiankun'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('vue3', {
      useDevMode: true
    })
  ],
  server: {
    port: 8002
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  output: {
    // 把子应用打包成 umd 库格式
    library: `app2-[name]`,
    libraryTarget: 'umd',
    jsonpFunction: `webpackJsonp_app2`
  },
})
