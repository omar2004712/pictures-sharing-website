const express = require('express');
const multer = require('multer');
//const bodyParser = require('body-parser')

const postsRepo = require('./repositories/postsRepo');
const homePageTemplate = require('./views/homePage/homePageTemplate')
const layout = require('./views/homePage/layout')
const upload = multer({ storage: multer.memoryStorage() })

const app = express();

const bodyParser = (req, res, next) => {
  req.on('data', data => {
    req.body = {...JSON.parse(data.toString('utf8'))}
  })
  req.on('end', () => {
    next();
  })
}
app.use(bodyParser)


app.use(express.static('public'))

app.get('/', async (req, res) => {
  res.send(homePageTemplate({ posts: await postsRepo.getAll()}))
})

app.post('/', (req, res) => {
  res.send(layout({content: ''}))
})

app.get('/new-post', (req, res) => {
  res.send(`
    <div>
      <form method="POST" enctype="multipart/form-data">
        <input required type="file" name="post-image" />
        <button>post</button>
      </form>
    </div>
  `)
})

app.post('/new-post', 
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

app.post('/like/:id', async  (req, res) => {
  const post = await postsRepo.getOne(req.params.id);
  await postsRepo.update(req.params.id, {
    likesCount: req.body.liked ? post.likesCount + 1:post.likesCount - 1
  })
})

app.post('/newComment/:id', async (req, res) => {
  const post = await postsRepo.getOne(req.params.id);
  post.comments.push(req.body.comment);
  post.commentsCount++;
  await postsRepo.update(req.params.id, {
    comments: post.comments,
    commentsCount: post.commentsCount
  })
})

app.listen( 3000, () => {
  console.log('Listening')
})