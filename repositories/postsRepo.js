const Repo = require('./repo');
const usersRepo = require('./usersRepo');

class PostsRepo extends Repo{
  async didUserLike(userId, postId){
    const post = await this.getOne(postId);
    return post.liked[userId];
  }
  async isItUserPost(userId, postId){
    const post = await this.getOne(postId);
    const user = await usersRepo.getOne(userId);
    return user.username === post.publisher;
  }
  async delete(id) {
    const records = await this.getAll();
    const filteredRecordes = records.filter(record => record.id !== id);
    this.writeAll(filteredRecordes)
  }
}

module.exports = new PostsRepo('posts.json')