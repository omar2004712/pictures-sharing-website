const { check } = require('express-validator')
const usersRepo = require('../../repositories/usersRepo');
const { doesEmailUsernameExist } = require('./helpers');


module.exports = {
  requireUsername: check('username')
  .trim()
  .custom( async username => {
    const existingUser = await usersRepo.getOneBy({ username });
    if(existingUser){
      throw new Error('username is used')
    }
  }),
  requireEmail: check('email')
  .trim()
  .normalizeEmail({
    gmail_remove_dots: false
  })
  .isEmail()
  .withMessage('Invalid Email')
  .custom( async email => {
    const existingUser = await usersRepo.getOneBy({ email });
    if(existingUser){
      throw new Error('Email is used')
    }
  }),
  requirePassword: check('password')
  .trim()
  .isLength({ min: 5, max: 20})
  .withMessage('password must be between 5 and 20 characters')
  .custom( (password, { req }) => {
    if(password !== req.body.confirmPassword){
      throw new Error('passwords must match')
    }
    return true;
  }),
  requireConfirmPassword: check('confirmPassword')
  .trim()
  .isLength({ min: 5, max: 20})
  .withMessage('password must be between 5 and 20 characters')
  .custom( (confirmPassword, { req }) => {
    if(confirmPassword !== req.body.password){
      throw new Error('passwords must match')
    }
    return true;
  }),
  requireUsernameEmailAuth: check('username-email')
  .trim()
  .custom(doesEmailUsernameExist),
  requireCorrectPassword: check('password')
  .trim()
  .custom(async (suppliedPassword, { req }) => {
    try{
      const existingUser = await doesEmailUsernameExist(req.body['username-email'], {}, 2);
      if(!usersRepo.comparePasswords( existingUser.password, suppliedPassword)){
        throw new Error('Incorrect password');
      }

      return true;

    } catch(err){
      throw new Error('Incorrect password')
    }
  })
}