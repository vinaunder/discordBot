const http = require('http');
const fetch = require('node-fetch'); // Instale o pacote: npm install node-fetch

// Configurar o servidor HTTP
const PORT = process.env.PORT || 8080;
http.createServer((req, res) => {
    res.write('Bot is alive!');
    res.end();
}).listen(PORT, () => {
    console.log(`Servidor HTTP rodando na porta ${PORT}`);
});

// URL do servidor no Render
const SERVER_URL = 'https://discordbot-6gd4.onrender.com/'; // Substitua pela URL do seu servidor

// Função para auto-pingar o servidor
function keepAlive() {
    setInterval(async () => {
        try {
            const res = await fetch(SERVER_URL);
            if (res.ok) {
                console.log(`Ping bem-sucedido: ${new Date().toLocaleTimeString()}`);
            } else {
                console.error(`Falha no ping: ${res.status}`);
            }
        } catch (error) {
            console.error(`Erro ao pingar o servidor: ${error.message}`);
        }
    }, 5 * 60 * 1000); // A cada 5 minutos
}

// Inicia o self-pinging
keepAlive();