const { validationResult } = require('express-validator')

module.exports = {
  handleErrors(templateFunc){
    return (req, res, next) => {
      const errors = validationResult(req);
      if(!errors){
        return next()
      }
      res.send(templateFunc({ errors }))
    }
  }
}