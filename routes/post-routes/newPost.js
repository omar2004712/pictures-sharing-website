const express = require('express');
const multer = require('multer');

const postsRepo = require('../../repositories/postsRepo');
const newPostTemplate = require('../../views/post/newPostTemplate');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })


router.get('/new-post', (req, res) => {
  res.send(newPostTemplate());
})

router.post('/new-post', 
upload.single('post-image')
, async (req, res) => {
  await postsRepo.create({
    image: req.file.buffer.toString('base64'),
    likesCount: 0,
    commentsCount: 0,
    comments: []
  })
  res.redirect('/')
})

module.exports = router;
