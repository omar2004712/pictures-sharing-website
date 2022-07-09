module.exports = ({content, title}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />    
        <link rel="stylesheet" href="main.css" />
        <title>${title || 'Pictures'}</title>
        <script src="https://kit.fontawesome.com/7ecb8aa263.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <div class="nav-bar home-page-navbar">
          <a href="/">Pictures</a>
          <div class="sign-out-button-container">
            <a href="/signout">
              <i class="fa-solid fa-arrow-right-from-bracket sign-out-button"></i>
            </a>
          </div>
        </div>
        ${content}
        <script src="navbar.js"></script>
      </body>
    </html>
  `
}