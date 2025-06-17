const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const contactoRoutes = require('./routes/contactoRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ✅ Línea para servir HTML y archivos estáticos
app.use(express.static('frontend'));

// Rutas de la API
app.use('/contactos', contactoRoutes);

// Middleware de errores
app.use(errorHandler);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB:', err);
  });
