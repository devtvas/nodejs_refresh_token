// authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../auth/authMiddleware');

const router = express.Router();

router.post('/login', (req, res) => {
  // Lógica de autenticação e geração de tokens
  const user = { username: req.body.username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  res.json({ accessToken, refreshToken });
});

router.post('/refresh_token', (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    res.json({ accessToken });
  });
});

router.get('/protected', authenticateToken, (req, res) => {
  // Rota protegida, apenas acessível com token válido
  res.json({ data: 'Informações protegidas' });
});

module.exports = router;
