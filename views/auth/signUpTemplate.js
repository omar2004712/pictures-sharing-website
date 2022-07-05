const { getError } = require('./helpers');
module.exports = ({ errors }) => {
  return `
  <form method="POST">
    <input placeholder="username" name="username" />                
    <label>${getError(errors, 'username')}</label>
    <input placeholder="email" name="email" />                      
    <label>${getError(errors, 'email')}</label>
    <input placeholder="password" name="password" />                
    <label>${getError(errors, 'password')}</label>
    <input placeholder="confirm password" name="confirmPassword" />
    <label>${getError(errors, 'confirmPassword')}</label>
    <button>Sign Up</button>
  </form>
  `
}