const express = require('express');
const router = express.Router();

// Datos de ejemplo para los clientes
let clients = [
  { id: 1, name: 'Cliente 1', email: 'cliente1@example.com' },
  { id: 2, name: 'Cliente 2', email: 'cliente2@example.com' },
];

// Obtener todos los clientes
router.get('/', (req, res) => {
  res.json(clients);
});

// Agregar un nuevo cliente
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newClient = { id: Date.now(), name, email };
  clients.push(newClient);
  res.json({ message: 'Cliente agregado exitosamente', client: newClient });
});

module.exports = router;
