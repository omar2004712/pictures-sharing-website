const Repo = require('./repo');

class PostsRepo extends Repo{
  async didUserLike(userId, postId){
    const post = await this.getOne(postId);
    return post.liked[userId];
  }
}

module.exports = new PostsRepo('posts.json')