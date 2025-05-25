import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import netlifyPlugin from "@netlify/vite-plugin-react-router";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "markdown-loader",
      transform(code, id) {
        if (id.slice(-3) === ".md") {
          // For .md files, get the raw content
          return `export default ${JSON.stringify(code)};`;
        }
      },
    },
    netlifyPlugin(),
    // mkcert(),
  ],
});
