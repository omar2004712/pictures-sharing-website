const express = require('express');
const postsRepo = require('../../repositories/postsRepo');
const { requireAuth } = require('../middlewares');

const router = express.Router();

router.post('/like/:id', requireAuth, async  (req, res) => {
  const post = await postsRepo.getOne(req.params.id);
  if(req.body.liked){
    post.liked.push(req.session.userId);
    post.likesCount++;
  } else{
    post.liked.splice(post.liked.indexOf(req.session.userId), 1);
    post.likesCount--
  }

  await postsRepo.update(req.params.id, {
    likesCount: post.likesCount,
    liked: post.liked
  })
  res.send({
    status: 200
  })
})

module.exports = router