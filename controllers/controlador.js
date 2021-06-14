let obtenerUno = (req, res, next) => {
    let id = req.params.id;
    res.status(200).json({
        msg : `Get, obtener uno`,
        id
    });
}

let obtenerTodos = (req, res, next) => {
    res.status(200).json({
        msg : `Get, obtener todos`,
        obj : []
    });
}

let crearUno = (req, res, next) => {
    let body = req.body;
    res.status(201).json({
        msg : `Post, crear uno`,
        obj : body
    })
}

let modificarUno = (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    res.status(200).json({
        msg: `Put, Modificar uno`,
        obj : body,
        id
    })
}

let eliminarUno = (req, res, next) => {
    let id = req.params.id;
    res.status(200).json({
        msg : `Delete, Eliminar uno`,
        id
    })
}