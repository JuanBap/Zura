const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [];

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'Usuario ya registrado' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { username, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: 'Usuario registrado exitosamente' });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Usuario no encontrado' });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Contraseña incorrecta' });
  }
  const token = jwt.sign({ username: user.username }, 'secreto', { expiresIn: '1h' });
  res.json({ message: 'Inicio de sesión exitoso', token });
};

module.exports = { registerUser, loginUser };
