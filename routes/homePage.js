const express = require('express');
const postsRepo = require('../repositories/postsRepo');
const homePageTemplate = require('../views/homePage/homePageTemplate');
const { requireAuth } = require('./middlewares')

const router = express.Router();

router.get('/', requireAuth, async (req, res) => {
  res.send(await homePageTemplate({ posts: await postsRepo.getAll(), req}))
})

module.exports = router;