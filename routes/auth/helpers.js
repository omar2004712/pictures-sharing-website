const { validationResult } = require('express-validator')
const usersRepo = require('../../repositories/usersRepo')

module.exports = {
  handleErrors(templateFunc){
    return async (req, res, next) => {
      const errors = validationResult(req);
      if(! errors.isEmpty()){
          return res.send(templateFunc({ errors }))
      }
      next();
    }
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