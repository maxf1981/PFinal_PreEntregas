const express = require('express');
const app = express();

// Datos de ejemplo para productos
const products = [
  { id: 1, name: 'Producto 1', price: 20 },
  { id: 2, name: 'Producto 2', price: 30 },
  // ... Agrega los demás productos aquí
];

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para obtener todos los productos o productos limitados
app.get('/products', (req, res) => {
  const limit = parseInt(req.query.limit);
  if (limit) {
    res.json(products.slice(0, limit));
  } else {
    res.json(products);
  }
});

// Ruta para obtener un producto por ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Inicia el servidor en el puerto 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
