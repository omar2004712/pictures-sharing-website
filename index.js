const express = require('express');
const multer = require('multer');
const { check } = require('express-validator')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session');

const postsRepo = require('./repositories/postsRepo');
const homePageTemplate = require('./views/homePage/homePageTemplate')
const upload = multer({ storage: multer.memoryStorage() })
const homePageRouter = require('./routes/homePage');
const likeRouter = require('./routes/like-comments-routes/like');
const commentRouter = require('./routes/like-comments-routes/comment');
const newPostRouter = require('./routes/post-routes/newPost')
const authRouter = require('./routes/auth/sign');
const deletePostRouter = require('./routes/post-routes/deletePost')
const usersRepo = require('./repositories/usersRepo');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use(cookieSession({
  keys: ['sdfkljsdlkgjfslkgjfldkg']
}))

app.use(homePageRouter);
app.use(likeRouter);
app.use(commentRouter)
app.use(newPostRouter)
app.use(authRouter)
app.use(deletePostRouter)

app.listen( 3000, () => {
  console.log('Listening')
})