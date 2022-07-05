const express = require('express');
const postsRepo = require('../../repositories/postsRepo');

const router = express.Router();

router.post('/like/:id', async  (req, res) => {
  const post = await postsRepo.getOne(req.params.id);
  await postsRepo.update(req.params.id, {
    likesCount: req.body.liked ? post.likesCount + 1:post.likesCount - 1
  })
  res.send({
    status: 200
  })
})

module.exports = router