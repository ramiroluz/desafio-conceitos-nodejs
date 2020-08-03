const express = require("express");
const cors = require("cors");
// (node:28252) DeprecationWarning: uuidv4() is deprecated. Use v4() from the uuid module instead.
// const { uuid } = require("uuidv4");
const { v4 } = require("uuid");
const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
  return response.json({});
});

app.post("/repositories", (request, response) => {
  // (node:28252) DeprecationWarning: uuidv4() is deprecated. Use v4() from the uuid module instead.
  const repo = {
    id: v4(),
    url: "https://github.com/ramiroluz/desafio-conceitos-nodejs",
    title: "Desafio Conceitos Nodejs",
    techs: ["Node", "Express", "TypeScript"],
    likes: 0
  };
  return response.json(repo);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
  return response.json({});
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
  return response.json({});
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
  return response.json({});
});

module.exports = app;
