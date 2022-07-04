const express = require('express')
const postsRepo = require('../../repositories/postsRepo');

const router = express.Router();

const bodyParser = (req, res, next) => {
  req.on('data', data => {
    req.body = {...JSON.parse(data.toString('utf8'))}
  })
  req.on('end', () => {
    next();
  })
}

router.post('/newComment/:id', bodyParser,async (req, res) => {
  const post = await postsRepo.getOne(req.params.id);
  post.comments.push(req.body.comment);
  post.commentsCount++;
  await postsRepo.update(req.params.id, {
    comments: post.comments,
    commentsCount: post.commentsCount
  })
})

module.exports = router;