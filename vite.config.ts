import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// 현재 작업 디렉토리에서 환경 변수 로드
const env = loadEnv('', process.cwd())['VITE_APP_ENV'];
// 환경 변수가 'development'이거나 설정되지 않았으면 개발 환경으로 간주
export const isDevelopment = !env || env === 'development';
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
    // 개발 환경일 때만 프록시 설정 적용
    proxy: isDevelopment
      ? {
          '/api': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        // 추가 프록시 규칙
        }
      : {},
  },
});
