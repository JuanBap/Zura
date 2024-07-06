const Client = require('../models/Client');

let clients = [];

const getClients = (req, res) => {
  res.json(clients);
};

const addClient = (req, res) => {
  const { name, email, phone } = req.body;
  const newClient = new Client(clients.length + 1, name, email, phone);
  clients.push(newClient);
  res.status(201).json(newClient);
};

const updateClient = (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  const clientIndex = clients.findIndex(client => client.id == id);
  if (clientIndex !== -1) {
    clients[clientIndex] = { id: Number(id), name, email, phone };
    res.json(clients[clientIndex]);
  } else {
    res.status(404).json({ message: 'Client not found' });
  }
};

const deleteClient = (req, res) => {
  const { id } = req.params;
  clients = clients.filter(client => client.id != id);
  res.status(204).end();
};

module.exports = {
  getClients,
  addClient,
  updateClient,
  deleteClient
};
