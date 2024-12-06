const http = require('http');

// Configurar o servidor HTTP
const PORT = process.env.PORT || 8080;
http.createServer((req, res) => {
    res.write('Bot is alive!');
    res.end();
}).listen(PORT, () => {
    console.log(`Servidor HTTP rodando na porta ${PORT}`);
});
