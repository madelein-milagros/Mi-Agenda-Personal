module.exports = (err, req, res, next) => {
  console.error(err); // útil para debug

  if (err.name === 'ValidationError') {
    const mensajes = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ errores: mensajes });
  }

  if (err.code === 11000) {
    const campo = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      errores: [`El ${campo} '${err.keyValue[campo]}' ya está registrado`]
    });
  }

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    return res.status(400).json({ errores: ['ID inválido'] });
  }

  res.status(500).json({ errores: ['Error interno del servidor'] });
};
