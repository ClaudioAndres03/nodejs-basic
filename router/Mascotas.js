const { render } = require('ejs');
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            { id: '0001', nombre: 'perro', descripcion: 'desc perro' },
            { id: '0002', nombre: 'gato', descripcion: 'desc gato' },
        ]
    })
})



module.exports = router;