const express = require('express');
const app = express();
const indexRoutes = require('./routes/index.routes');

app.use(express.json()); 
app.use('/', indexRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:${PORT}');
});