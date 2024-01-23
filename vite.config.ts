import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@components': resolve(__dirname, 'src/components'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@util': resolve(__dirname, 'src/util'),
      '@api': resolve(__dirname, 'src/api'),
      '@type': resolve(__dirname, 'src/types'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@store': resolve(__dirname, 'src/store'),
    },
  },
  server: {
    proxy: {
      // 프록시 설정
      '/api': {
        target: 'http://localhost:3000', // 백엔드 서버 주소
        changeOrigin: true, // cross-origin 요청을 위해 필요
        rewrite: (path) => path.replace(/^\/api/, ''), // 경로 재작성 옵션
      },
      // 다른 프록시 규칙 추가 가능
    },
  },
});
