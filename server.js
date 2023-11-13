// server.js
require('dotenv').config();
const express = require('express');
const startRoutes = require('./src/intoRoutes');
const authRoutes = require('./src/auth/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas 
app.use('/', startRoutes);
app.use('/auth', authRoutes);

// Ouvinso o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
