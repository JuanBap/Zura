import React, { useState } from 'react';
import apiConfig from '../apiConfig';

const ClientForm = ({ client = {}, onSave }) => {
  const [name, setName] = useState(client.name || '');
  const [email, setEmail] = useState(client.email || '');
  const [phone, setPhone] = useState(client.phone || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = client.id ? 'PUT' : 'POST';
    const url = client.id ? `${apiConfig.baseURL}/api/clients/${client.id}` : `${apiConfig.baseURL}/api/clients`;

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    });

    const data = await response.json();
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default ClientForm;
