const { Router } = require('express');
const SomeFilms = require('../models/SomeFilms.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const films = await SomeFilms.getAll();
    const filtered = films.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  })
  .get('/:id', async (req, res) => {
    const film = await SomeFilms.getById(req.params.id);
    res.json(film);
  });
