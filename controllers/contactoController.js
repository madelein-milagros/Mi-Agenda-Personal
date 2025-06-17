const Contacto = require('../models/Contacto');

exports.crearContacto = async (req, res, next) => {
  try {
    const nuevoContacto = new Contacto(req.body);
    const contactoGuardado = await nuevoContacto.save();
    res.status(201).json(contactoGuardado);
  } catch (error) {
    next(error);
  }
};

exports.obtenerContactos = async (req, res, next) => {
  try {
    const contactos = await Contacto.find().sort({ nombre: 1 });
    res.json(contactos);
  } catch (error) {
    next(error);
  }
};

exports.obtenerContactoPorId = async (req, res, next) => {
  try {
    const contacto = await Contacto.findById(req.params.id);
    if (!contacto) {
      return res.status(404).json({ mensaje: 'Contacto no encontrado' });
    }
    res.json(contacto);
  } catch (error) {
    next(error);
  }
};

exports.actualizarContacto = async (req, res, next) => {
  try {
    const contactoActualizado = await Contacto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!contactoActualizado) {
      return res.status(404).json({ mensaje: 'Contacto no encontrado' });
    }
    res.json(contactoActualizado);
  } catch (error) {
    next(error);
  }
};

exports.eliminarContacto = async (req, res, next) => {
  try {
    const contactoEliminado = await Contacto.findByIdAndDelete(req.params.id);
    if (!contactoEliminado) {
      return res.status(404).json({ mensaje: 'Contacto no encontrado' });
    }
    res.json({ mensaje: 'Contacto eliminado correctamente' });
  } catch (error) {
    next(error);
  }
};

exports.buscarContacto = async (req, res, next) => {
  try {
    const { query } = req.query;
    const resultados = await Contacto.find({
      $or: [
        { nombre: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(resultados);
  } catch (error) {
    next(error);
  }
};
