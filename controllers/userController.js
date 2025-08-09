// userController.js
const userService = require('../services/userService');

exports.getAllUsers = (req, res) => {
  res.json(userService.getAllUsers());
};

exports.addFavorecido = (req, res) => {
  const { username, favorecido } = req.body;
  const ok = userService.addFavorecido(username, favorecido);
  if (!ok) return res.status(404).json({ message: 'Usuário não encontrado.' });
  res.json({ message: 'Favorecido adicionado.' });
};
