var router = require('express').Router();

router.get('/', (req, res, next)=>{
  res.send('API de afiliados');
});

module.exports = router;