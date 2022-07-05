const express = require('express');
const multer = require('multer');

const postsRepo = require('../../repositories/postsRepo');
const usersRepo = require('../../repositories/usersRepo');
const newPostTemplate = require('../../views/post/newPostTemplate');
const { requireAuth } = require('../middlewares');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })


router.get('/new-post', requireAuth, (req, res) => {
  res.send(newPostTemplate());
})

router.post('/new-post' 
,upload.single('post-image')
,requireAuth
, async (req, res) => {
  console.log(req.session.userId)
  await postsRepo.create({
    image: req.file.buffer.toString('base64'),
    likesCount: 0,
    commentsCount: 0,
    comments: [],
    publisher: (await usersRepo.getOne(req.session.userId)).username
  })
  res.redirect('/')
})

module.exports = router;
