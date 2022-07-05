const assert = require('assert');

const { doesEmailUsernameExist } = require('../routes/auth/helpers');
const usersRepo = require('../repositories/usersRepo');

it('doesEmailUsernameExist', async () => {
  const user = await usersRepo.create({
    username: 'testing',
    email: 'testing@testing.com',
    password: 'password'
  });
  assert.strictEqual( Boolean(await doesEmailUsernameExist('testing@testing.com')), true );
  await usersRepo.delete(user.id);
})