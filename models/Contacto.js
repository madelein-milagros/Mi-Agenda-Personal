const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  telefono: {
    type: String,
    required: [true, 'El teléfono es obligatorio'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    sparse: true, // permite valores nulos únicos
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'El formato del email no es válido'
    }
  },
  direccion: {
    type: String,
    trim: true
  },
  fechaNacimiento: {
    type: Date
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contacto', contactoSchema);
