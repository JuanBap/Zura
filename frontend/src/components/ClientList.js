import React, { useEffect, useState } from 'react';
import apiConfig from '../apiConfig';
import Client from './Client';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${apiConfig.baseURL}/api/clients`)
      .then(response => response.json())
      .then(data => setClients(data));
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clients.map(client => (
          <Client key={client.id} client={client} />
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
