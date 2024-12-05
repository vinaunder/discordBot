const translate = require('google-translate-api-x');

async function testTranslate() {
    try {
        const res = await translate('Hello, world!', { to: 'pt' });
        console.log('Tradução:', res.text); // Deve exibir "Olá, mundo!"
    } catch (error) {
        console.error('Erro ao traduzir:', error.message);
    }
}

testTranslate();
