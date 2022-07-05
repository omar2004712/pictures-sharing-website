const { getError } = require('./helpers');
const layout = require('./layout');

module.exports = ({ errors }) => {
  return layout({
    content: `
    <div class="sign-up-container">
      <h1>Sign Up</h1>
      <form method="POST" class="sign-up-form">
        <input required class="signup-input" placeholder="username" name="username" />                
        <label class="error">${getError(errors, 'username')}</label>
        <input required class="signup-input" placeholder="email" name="email" />                      
        <label class="error">${getError(errors, 'email')}</label>
        <input required type="password" class="password-input" placeholder="password" name="password" />                
        <label class="error">${getError(errors, 'password')}</label>
        <input required type="password" class="password-input" placeholder="confirm password" name="confirmPassword" />
        <label>${getError(errors, 'confirmPassword')}</label>
        <button class="sign-up-button">Sign Up</button>
      </form>
      <span class="switch-pages" >Already have an account? <a href="/signin">Sign In</a></span>
    </div>
    `,
    title: 'Pictures - Sign Up'
  })
}