var router = require('express').Router();

router.get('/', (req, res, next)=>{
  res.send('Plantilla de API');
});

router.use('/ruta', require('./rutas'));

module.exports = router;