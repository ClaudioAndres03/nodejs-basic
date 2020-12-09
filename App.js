// Template Engines (EJS) con Express

const { static } = require('express');
const express = require('express');
const app = express();

const port = 3000;

// motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')


app.use(static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render("index", { titulo: "Mi titulo dinamico" })
})

app.get('/servicios', (req, res) => {
    res.render('servicios', { tituloServicios: "Mi titulo dinamico de servicios" })
})

app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo: "Error 404",
        description: "esta es la pagina 404"
    })
})

app.listen(port, () => {
    console.log('Servidor a su servicio en el puero', port)
})

