// transferController.js
const transferService = require('../services/transferService');

exports.transfer = (req, res) => {
  const { from, to, value } = req.body;
  const result = transferService.transfer(from, to, value);
  if (!result.success) {
    return res.status(400).json({ message: result.message });
  }
  res.status(201).json({ transfer: result.transfer });
};
