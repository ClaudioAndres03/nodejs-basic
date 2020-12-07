// Introducción a Express.js

const { static } = require('express');
const express = require('express');
const app = express();

const port = 3000;

app.use(static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('Mi respuestas en Express')
})

app.get('/servicios', (req, res) => {
    res.send('Esta es la pagina de servicios')
}
)

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
}
)

app.listen(port, () => {
    console.log('Servidor a su servicio en el puero', port)
})

