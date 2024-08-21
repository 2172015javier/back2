const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  username: {
    type: String,
    required: [true, "EL nombre es obligatorio"],
  },

  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  role: {
    type: String,
    required: true,
    // Administrador y Analista
    enum: ["Administrador", "Analista"],
  },
  permisos: {
    type: [String],
    enum: ["lectura", "escritura"],
    required: true,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UsuarioSchema.methods.toJSON = function () {
  const { __v, password, _id, ...usuario } = this.toObject();
  usuario.uid = _id;
  return usuario;
};

module.exports = model("User", UsuarioSchema);
