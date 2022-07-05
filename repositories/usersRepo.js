const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);

const Repo = require('./repo');

class UsersRepo extends Repo {
  async hashPassword(password, salt){
      const buff = await scrypt(password, salt, 64);
      const hashed = buff.toString('hex');
      return hashed;
  }

  async create(user){
      user.id = this.randomId();
      const users = await this.getAll();
      const salt = crypto.randomBytes(4).toString('hex');
      const hashed = await this.hashPassword(user.password, salt)
      user.password = hashed + '.' + salt;
      users.push(user);
      await this.writeAll(users)
      return user;
  }

  async comparePasswords(saved, supplied){
      const [hashed, salt] = saved.split('.');
      const hashedSupplied = await this.hashPassword(supplied, salt);
      return hashed === hashedSupplied;
  } 

  async getOneBy(filters) {
        const records = await this.getAll();
        const record = records.find((record) => {
            let found = true;
            for(let key in filters){
                if(!found) return found
                found = found && (record[key] === filters[key])
            }
            return found
        })

        return record
    }
}

module.exports = new UsersRepo('users.json');