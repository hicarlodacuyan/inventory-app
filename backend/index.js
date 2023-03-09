const app = require("./app");
const http = require("http");
const config = require("./utils/config");

const server = http.createServer(app);

app.get("/", (_req, res) => {
  res.send(`Server is now running at port ${config.PORT}`);
});

server.listen(config.PORT, () => {
  console.log(`Server is now running at port ${config.PORT}`);
});
