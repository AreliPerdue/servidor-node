// Importar el modulo HTTP
const http = require('http');

//Definir el puerto en que se ejecutara el servidor
const PORT = 3000;

const servidor = http.createServer((req, res) => {

if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });   
        res.end('<h1>Pagina principal\n</h1>');

    } else if (req.url === '/acerca') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<b>Pagina acerca de\n </b>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<i>Pagina no encontrada\n</i>');
    }
});

servidor.listen(PORT, () => {
    console.log(`EL servidor esta corriendo en el puerto ${PORT}`);
});




