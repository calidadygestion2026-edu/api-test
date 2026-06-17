const express = require('express');

const router = express.Router();

const {
    obtenerTareas,
    obtenerTareaPorId,
    crearTarea
} = require('../controllers/tareas.controller');

router.get('/', obtenerTareas);

router.get('/:id', obtenerTareaPorId);

router.post('/', crearTarea);

module.exports = router;