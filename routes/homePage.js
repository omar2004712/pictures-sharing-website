const express = require('express');
const postsRepo = require('../repositories/postsRepo');
const homePageTemplate = require('../views/homePage/homePageTemplate');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(homePageTemplate({ posts: await postsRepo.getAll()}))
})

module.exports = router;