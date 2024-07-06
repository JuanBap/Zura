import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/client/new">New Client</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clients" element={<ClientList />} />
          <Route path="/client/new" element={<ClientForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
