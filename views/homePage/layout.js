module.exports = ({content}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="main.css" />
        <script src="https://kit.fontawesome.com/7ecb8aa263.js" crossorigin="anonymous"></script>
        </head>
      <body>
        <div class="nav-bar">
          Pictures
        </div>
        ${content}
      </body>
    </html>
  `
}