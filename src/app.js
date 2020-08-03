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
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  // (node:28252) DeprecationWarning: uuidv4() is deprecated. Use v4() from the uuid module instead.
  const { url, title, techs } = request.body;
  const repo = {
    id: v4(),
    url: url,
    title: title,
    techs: techs,
    likes: 0
  };

  repositories.push(repo);
  return response.json(repo);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { url, title, techs } = request.body;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
      return response.status(400).json({error: 'Repository not found!!'});
  }

  likes = repositories[repoIndex].likes;

  const repo = {
      id,
      url,
      title,
      techs,
      likes
  }

  repositories[repoIndex] = repo;

  return response.json(repo);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
      return response.status(400).json({error: 'Repository not found!!'});
  }

  repositories.splice(repoIndex, 1);

  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
      return response.status(400).json({error: 'Repository not found!!'});
  }

  const { url, title, techs, likes } = repositories[repoIndex];
  
  repo = {
    id,
    url,
    title,
    techs,
    likes: likes + 1
  };

  repositories[repoIndex] = repo;

  console.log(repo);

  return response.json(repo);
});

module.exports = app;
