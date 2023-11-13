// authRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../auth/authMiddleware');
const router = express.Router();

const expiresInSec = 60000;

router.post('/login', (req, res) => {
  // Lógica de autenticação e geração de tokens
  const user = { username: req.body.username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  res.json({ accessToken, refreshToken });
});

router.post('/refresh_token', (req, res) => {
  const token = req.body.token;
  console.log('token: ' + req.body.token);
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
    res.json({ accessToken });
  });
});


module.exports = router;
