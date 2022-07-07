const assert = require('assert')

const { comparePasswords } = require('../repositories/usersRepo');
const usersRepo = require('../repositories/usersRepo');

it('hash passwords test', async () => {
  const user = await usersRepo.create({
    username: 'testing',
    email: 'testing@testing.com',
    password: 'password'
  })
  const hash = `${await usersRepo.hashPassword('password', user.password.split('.')[1])}.${user.password.split('.')[1]}`;
  assert.strictEqual(hash, user.password)
})

it('comparePassword test', async () => {
  await usersRepo.delete('8f951bef');
  const { id } = await usersRepo.create({
    username: 'testing',
    email: 'testing@testing.com',
    password: 'password'
  })
  const user = await usersRepo.getOne(id);
  assert.strictEqual(await usersRepo.comparePasswords(user.password, 'password'), true)
})