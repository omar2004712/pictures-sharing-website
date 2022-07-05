const { getError } = require("./helpers")
const layout = require('./layout');


module.exports = ({ errors }) => {
  return layout({
    content: `
    <div class="sign-in-container">
      <h1>Sign In</h1>
      <form method="POST" class="sign-in-form">
        <input required placeholder="username" name="username-email" class="username-email-input" />
        <label class="error">${getError(errors, 'username-email')}</label>
        <input required type="password" placeholder="password" name="password" class="password-input"/>
        <label class="error">${getError(errors, 'password')}</label>
        <button class="sign-in-button">Sign In</button>
      </form>
      <span class="switch-pages">don't have an account? <a href="/signup">Sign Up</a></span>
    </div>
    `,
    title: 'Picture - Sign In'
  })
}