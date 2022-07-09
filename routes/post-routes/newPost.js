const express = require('express');
const multer = require('multer');

const postsRepo = require('../../repositories/postsRepo');
const usersRepo = require('../../repositories/usersRepo');
const newPostTemplate = require('../../views/post/newPostTemplate');
const { requireAuth } = require('../middlewares');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() })


router.get('/new-post', requireAuth, (req, res) => {
  res.send(newPostTemplate({ errors: {}}));
})

router.post('/new-post' 
,upload.single('post-image')
,requireAuth
,(req, res, next) => {
  try{
    if(req.file){
    const validExtensions = ['png', 'jpeg', 'jpg'];
    const fileName = req.file.originalname.split('.');
    const fileExtension = fileName[fileName.length - 1];
    if(validExtensions.includes(fileExtension)){
      next();
    }
    else{
      throw new Error('Invalid Input');
    }
    }
    else{
      throw new Error('Image Required');
    }
  } catch (err){
    res.send(newPostTemplate({ errors: err }))
  }
}
, async (req, res) => {
  await postsRepo.create({
    image: req.file.buffer.toString('base64'),
    likesCount: 0,
    commentsCount: 0,
    comments: [],
    publisher: (await usersRepo.getOne(req.session.userId)).username,
    liked: {}
  })
  res.redirect('/')
})

module.exports = router;
