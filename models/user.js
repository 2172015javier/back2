
const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    username: {
        type: String,
        required: [true, 'EL nombre es obligatorio']
    },
  
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    role: {
        type: String,
        required: true,
        // Administrador y Analista
        enum: ['Administrador', 'Analista'] 
    },
    permisos:{
        type: [String], 
        enum: ['lectura', 'escritura'],
        required: true 
    },
    estado: {
        type: Boolean   ,
        default: true
    },
    google: {
        type: Boolean,
        default:false
    },
    
    
});

UsuarioSchema.methods.toJSON = function(){
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id; 
    return usuario
}

module.exports = model('User', UsuarioSchema);

// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['Administrador', 'Analista'], required: true },
//   permissions: { type: [String], enum: ['lectura', 'escritura'], required: true },
//   active: { type: Boolean, default: true }
// });

// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// userSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);
// module.exports = User;
