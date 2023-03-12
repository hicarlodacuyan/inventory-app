const app = require("./app");
const http = require("http");
const config = require("./utils/config");
const path = require("path");

const server = http.createServer(app);

app.get("/", (_req, res) => {
  res.send(`Server is now running at port ${config.PORT}`);
});

app.get("*", (_req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "dist") });
});

server.listen(config.PORT, () => {
  console.log(`Server is now running at port ${config.PORT}`);
});
