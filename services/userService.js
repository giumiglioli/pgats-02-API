// userService.js
const { users } = require('../models/userModel');

function getAllUsers() {
  return users.map(u => ({ username: u.username, favorecidos: u.favorecidos }));
}

function addFavorecido(username, favorecido) {
  const user = users.find(u => u.username === username);
  if (!user) return false;
  if (!user.favorecidos.includes(favorecido)) {
    user.favorecidos.push(favorecido);
  }
  return true;
}

function isFavorecido(username, favorecido) {
  const user = users.find(u => u.username === username);
  return user && user.favorecidos.includes(favorecido);
}

module.exports = { getAllUsers, addFavorecido, isFavorecido };
