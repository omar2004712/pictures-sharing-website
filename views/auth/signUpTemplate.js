const { getError } = require('./helpers');
const layout = require('./layout');

module.exports = ({ errors }) => {
  return layout({
    content: `
    <div class="sign-up-container">
      <h1>Sign Up</h1>
      <form method="POST" class="sign-up-form">
        <input required class="signup-input" placeholder="username" name="username" />                
        <label>${getError(errors, 'username')}</label>
        <input required class="signup-input" placeholder="email" name="email" />                      
        <label>${getError(errors, 'email')}</label>
        <input required class="password-input" placeholder="password" name="password" />                
        <label>${getError(errors, 'password')}</label>
        <input required class="password-input" placeholder="confirm password" name="confirmPassword" />
        <label>${getError(errors, 'confirmPassword')}</label>
        <button class="sign-up-button">Sign Up</button>
      </form>
      <span class="switch-pages" >Already have an account? <a href="/signin">Sign In</a></span>
    </div>
    `,
    title: 'Pictures - Sign Up'
  })
}