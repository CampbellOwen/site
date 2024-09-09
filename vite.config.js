import path from "path";
import fs from "fs";
import handlebars from "vite-plugin-handlebars";

function getHtmlEntries() {
  const pagesDir = path.resolve(__dirname, "pages");
  const entries = {};
  const files = fs.readdirSync(pagesDir);
  const htmlFiles = files.filter((file) => file.endsWith(".html"));
  htmlFiles.forEach((file) => {
    const name = path.basename(file, ".html");
    entries[name] = path.resolve(pagesDir, file);
  });

  return entries;
}

export default {
  base: "./",
  build: {
    minify: false,
    rollupOptions: {
      input: {
        ...getHtmlEntries(),
        main: "index.html",
        404: "404.html",
      },
      output: {
        dir: "build",
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, "partials"),
    }),
  ],
};
