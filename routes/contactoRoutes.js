const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');

// Crear contacto
router.post('/', contactoController.crearContacto);

// Obtener todos los contactos
router.get('/', contactoController.obtenerContactos);

// Obtener contacto por ID
router.get('/:id', contactoController.obtenerContactoPorId);

// Actualizar contacto por ID
router.put('/:id', contactoController.actualizarContacto);

// Eliminar contacto por ID
router.delete('/:id', contactoController.eliminarContacto);

// Buscar por nombre o email
router.get('/buscar/query', contactoController.buscarContacto);

module.exports = router;
