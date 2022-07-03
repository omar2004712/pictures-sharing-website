module.exports = ({content}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="main.css" />
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