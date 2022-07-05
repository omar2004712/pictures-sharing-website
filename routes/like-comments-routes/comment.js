const express = require('express')
const postsRepo = require('../../repositories/postsRepo');
const usersRepo = require('../../repositories/usersRepo');
const { requireAuth } = require('../middlewares');

const router = express.Router();

router.post('/newComment/:id', requireAuth, async (req, res) => {
  const post = await postsRepo.getOne(req.params.id);
  post.comments.push({
    comment: req.body.comment,
    commenter: (await usersRepo.getOne(req.session.userId)).username
  });
  post.commentsCount++;
  await postsRepo.update(req.params.id, {
    comments: post.comments,
    commentsCount: post.commentsCount
  })
  res.send({
    status: 200,
    commenterUsername: (await usersRepo.getOne(req.session.userId)).username
  })
})

module.exports = router;