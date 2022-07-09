const express = require('express');

const postRepo = require('../../repositories/postsRepo');

const router = express.Router();

router.delete('/delete/:postId', async (req, res) => {
  await postRepo.delete(req.params.postId);
  res.send({
    status: 200
  })
})

module.exports = router;