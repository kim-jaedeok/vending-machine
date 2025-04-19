import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: {
      "@vending-machine/core": path.resolve(__dirname, "../../core/src"),
      "@vending-machine/types": path.resolve(__dirname, "../../types/src"),
      "@vending-machine/react": path.resolve(__dirname, "../../react/src"),
    },
  },
});
