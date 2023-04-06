import express from "express";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "public");

app.get("/", async (req, res) => {
  try {
    const html = await readFile(join(publicDir, "index.html"));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Server Error");
  }
});

app.get("/script.js", async (req, res) => {
  try {
    const js = await readFile(join(publicDir, "script.js"));
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/javascript");
    res.end(js);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end("Server Error");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
