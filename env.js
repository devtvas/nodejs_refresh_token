
// Importe a biblioteca 'dotenv'
require('dotenv').config();

// Acesse a variável de ambiente process.env.PORT
const port = process.env.PORT || 3000;

// Exemplo de utilização da variável
console.log(`O servidor está rodando na porta ${port}`);