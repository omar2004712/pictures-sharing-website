const assert = require('assert');

const { doesEmailUsernameExist, doesUsernameContainesInvalidChars } = require('../routes/auth/helpers');
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

it('doesUsernameContainesInvalidChars error test', () => {
  try{
    doesUsernameContainesInvalidChars('=4kfd;v');
    throw new Error('= invalid chars supposed to throw an error')
  } catch(err){

  }
})

it('doesUsernameContainesInvalidChars no error test', () => {
  assert.strictEqual(doesUsernameContainesInvalidChars('._4hterr'), 
  true, 'valid username expected no errors to be thrown');
})