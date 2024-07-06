import React from 'react';

const Client = ({ client }) => {
  return (
    <li>
      {client.name} - {client.email} - {client.phone}
    </li>
  );
};

export default Client;
