import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esNext",
    emptyOutDir: true,
    lib: {
      formats: ["es"],
      entry: "src/main.ts",
    },
    rollupOptions: {
      output: {
        dir: "dist",
        entryFileNames: "main.js",
        format: "esm",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
