const mongoose = require('mongoose')

const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    marca: String,
    precio: Number,
    categoria: String,
    cantInventario: Number,
    urlImg: String
  })

const productos = mongoose.model('productos', productoSchema)

module.exports = productos