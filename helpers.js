const bodyParser = (req, res, next) => {
  req.on('data', data => {
    console.log(data)
    req.body = {...JSON.parse(data.toString('utf8'))}
  })
  req.on('end', () => {
    next();
  })
}

module.exports = bodyParser;