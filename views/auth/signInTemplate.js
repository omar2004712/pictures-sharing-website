const { getError } = require("./helpers")

module.exports = ({ errors }) => {
  return `
    <form method="POST">
      <input placeholder="username" name="username-email" />
      <label>${getError(errors, 'username-email')}</label>
      <input placeholder="password" name="password" />
      <label>${getError(errors, 'password')}</label>
      <button>Sign In</button>
    </form>
  `
}