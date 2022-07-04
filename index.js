const express = require('express');
const multer = require('multer');
//const bodyParser = require('body-parser')

const postsRepo = require('./repositories/postsRepo');
const homePageTemplate = require('./views/homePage/homePageTemplate')
const upload = multer({ storage: multer.memoryStorage() })
const homePageRouter = require('./routes/homePage');
const likeRouter = require('./routes/like-comments-routes/like');
const commentRouter = require('./routes/like-comments-routes/comment');
const newPostRouter = require('./routes/post-routes/newPost')

const app = express();


app.use(express.static('public'))

app.use(homePageRouter);
app.use(likeRouter);
app.use(commentRouter)
app.use(newPostRouter)


app.listen( 3000, () => {
  console.log('Listening')
})