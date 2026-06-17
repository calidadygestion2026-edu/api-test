const express = require('express');

const app = express();

app.use(express.json());

const tareasRoutes = require('./routes/tareas.routes');

app.use('/tareas', tareasRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});