const router = require('express').router;
const {
    obtenerUno,
    obtenerTodos,
    crearUno,
    modificarUno,
    eliminarUno
} = require('../controllers/controlador');

router.get('/', obtenerTodos);
router.get('/:id', obtenerUno);
router.post('/', crearUno);
router.put('/:id', modificarUno);
router.delete('/:id', eliminarUno);

module.exports = router;