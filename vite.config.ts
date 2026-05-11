import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function getBase() {
  if (process.env.VITE_BASE_URL) {
    return process.env.VITE_BASE_URL;
  }

  return "./";
}

export default defineConfig({
  plugins: [react()],
  base: getBase(),
});
