// protectedRoute.js
const express = require('express');
const { authenticateToken } = require('./authMiddleware');

const router = express.Router();

router.get('/protected', authenticateToken, (req, res) => {
  // Rota protegida, apenas acessível com token válido
  console.log('user: ' +req.user);
  res.json({ data: 'Informações protegidas', user: req.user });
});

module.exports = router;