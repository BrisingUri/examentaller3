const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenido unach');
});

router.get('/api/servicio', (req, res) => {
    res.send('servicios unach');
});

module.exports = router;