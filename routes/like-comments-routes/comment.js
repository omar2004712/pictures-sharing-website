const express = require('express')
const postsRepo = require('../../repositories/postsRepo');
const { requireAuth } = require('../middlewares');

const router = express.Router();

router.post('/newComment/:id', requireAuth, async (req, res) => {
  console.log(req.body)
  const post = await postsRepo.getOne(req.params.id);
  post.comments.push(req.body.comment);
  post.commentsCount++;
  await postsRepo.update(req.params.id, {
    comments: post.comments,
    commentsCount: post.commentsCount
  })
  res.send({
    status: 200
  })
})

module.exports = router;