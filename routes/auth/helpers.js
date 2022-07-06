const { validationResult } = require('express-validator')
const usersRepo = require('../../repositories/usersRepo')

module.exports = {
  doesUsernameContainesInvalidChars(username){
    for(let char of username){
      if(!(char >= '0' && char <= '9') 
      && (char !== '_' && char !== '.') 
      && !(char >='a' && char <= 'z')){
        throw new Error(`${char} is invalid character`)
      }
    }
    return true;
  },
  async doesEmailUsernameExist(usernameEmail){
    let existingUser = await usersRepo.getOneBy({ username: usernameEmail});
    if(!existingUser){
      existingUser = await usersRepo.getOneBy({ email: usernameEmail});
      if(!existingUser){
        throw new Error('Email is not used');
      }
      return existingUser;
    }
    return existingUser;
  }
}