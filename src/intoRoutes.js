// app.js
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bem-vindo ao meu projeto Node.js, com tokens!');
});


module.exports = router;