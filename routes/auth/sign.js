const express = require('express');
const { check } = require('express-validator');

const usersRepo = require('../../repositories/usersRepo');
const signUpTemplate = require('../../views/auth/signUpTemplate');
const { handleErrors } = require('./helpers');
const { requireUsername, requireEmail, requirePassword, requireConfirmPassword } = require('./validators');

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

module.exports = router;