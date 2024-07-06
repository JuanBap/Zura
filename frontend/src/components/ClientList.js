import React, { useEffect, useState } from 'react';
import apiConfig from '../apiConfig';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch(`${apiConfig.baseURL}/api/clients`);
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h2>Client List</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
