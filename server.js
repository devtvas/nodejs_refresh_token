// server.js
require('dotenv').config();
const express = require('express');
const startRoutes = require('./src/intoRoutes');
const authRoutes = require('./src/auth/authRoutes');
const protectedRoute = require('./src/auth/protectedRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rotas 
app.use('/', startRoutes);
app.use('/auth', authRoutes);
// Rota protegida
app.use('/home', protectedRoute);

// Ouvinso o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
