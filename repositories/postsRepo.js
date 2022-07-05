const Repo = require('./repo');

class PostsRepo extends Repo{

}

module.exports = new PostsRepo('posts.json')