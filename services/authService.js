// authService.js
const { users } = require('../models/userModel');

function login(username, password) {
  if (!username || !password) {
    return { success: false, message: 'Usuário e senha são obrigatórios.' };
  }
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return { success: false, message: 'Usuário ou senha inválidos.' };
  }
  return { success: true, user };
}

function register(username, password) {
  if (users.find(u => u.username === username)) {
    return { success: false, message: 'Usuário já registrado.' };
  }
  const newUser = { username, password, favorecidos: [] };
  users.push(newUser);
  return { success: true, user: newUser };
}

module.exports = { login, register };
