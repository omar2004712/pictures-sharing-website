const express = require('express');
const { check } = require('express-validator');

const usersRepo = require('../../repositories/usersRepo');
const signUpTemplate = require('../../views/auth/signUpTemplate');
const signInTemplate = require('../../views/auth/signInTemplate');
const { handleErrors, doesEmailUsernameExist } = require('./helpers');
const { requireUsername, requireEmail, requirePassword, requireConfirmPassword, requireUsernameEmailAuth, requireCorrectPassword } = require('./validators');
const { getOneBy } = require('../../repositories/usersRepo');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signUpTemplate({}))
})

router.post('/signup',[ 
  requireEmail,
  requireUsername,
  requirePassword,
  requireConfirmPassword
],
handleErrors(signUpTemplate),
async (req, res) => {
  req.session.userId = await usersRepo.create({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })

  res.redirect('/')
})

router.get('/signin', (req, res) => {
  res.send(signInTemplate({}));
})

router.post('/signin', [
  requireUsernameEmailAuth,
  requireCorrectPassword
],
handleErrors(signInTemplate)
,async (req, res) => {
  req.session.userId = (await doesEmailUsernameExist(req.body['username-email'])).id;
  res.redirect('/')
})

router.get('/signout', (req, res) => {
  delete req.session.userId;
  res.redirect('/signin')
})

module.exports = router;