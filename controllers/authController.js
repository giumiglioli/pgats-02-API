// authController.js
const authService = require('../services/authService');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const result = authService.login(username, password);
  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }
  res.json({ user: result.user });
};

exports.register = (req, res) => {
  const { username, password } = req.body;
  const result = authService.register(username, password);
  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }
  res.status(201).json({ user: result.user });
};
