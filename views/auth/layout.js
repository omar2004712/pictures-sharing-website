module.exports = ({content, title}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="main.css" />
        <title>${title || 'Pictures'}</title>
        <script src="https://kit.fontawesome.com/7ecb8aa263.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <div class="nav-bar">
          <a href="/">Pictures</a>
        </div>
        ${content}
      </body>
    </html>
  `
}