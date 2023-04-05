import http from "http";
import { readFile } from "fs/promises";

const hostname = "127.0.0.1";
const port = 3000;

http
  .createServer(async (req, res) => {
    if (req.url === "/") {
      try {
        const html = await readFile("./public/index.html");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(html);
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Server Error");
      }
    } else if (req.url === "/app.js") {
      try {
        const js = await readFile("./public/app.js");
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/javascript");
        res.end(js);
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Server Error");
      }
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
