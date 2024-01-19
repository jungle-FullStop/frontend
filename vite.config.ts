import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@pages": resolve(__dirname, "src/pages"),
      "@components": resolve(__dirname, "src/components"),
      "@assets": resolve(__dirname, "src/assets"),
      "@util": resolve(__dirname, "src/util"),
      "@api": resolve(__dirname, "src/api"),
      "@type": resolve(__dirname, "src/types"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@store": resolve(__dirname, "src/store"),
    },
  },
});
