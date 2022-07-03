const fs = require('fs');
const crypto = require('crypto');

class PostsRepo{
  constructor (filename) {
    if(!filename) {
        throw new Error('file name is required')
    }
    try {
        fs.accessSync(filename);
    } catch (err) {
        fs.writeFileSync(filename, '[]')
    }
    this.filename = filename;
  };

  async getAll(){
    return JSON.parse(await fs.promises.readFile(this.filename, {
        encoding: 'utf8'
    }))
  }

  async writeAll(records) {
    await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
  }

  randomId(){
    return crypto.randomBytes(4).toString('hex')
  }

  async create(attrs){
    attrs.id = this.randomId();
    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);
    return attrs.id;
  }
}

module.exports = new PostsRepo('posts.json')