const { Router } = require('express');
const SomeAlbums = require('../models/SomeAlbums.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const albums = await SomeAlbums.getAll();
    const filtered = albums.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  })
  .get('/:id', async (req, res) => {
    const album = await SomeAlbums.getById(req.params.id);
    res.json(album);
  });
