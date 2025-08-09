// transferService.js
const { transfers } = require('../models/transferModel');
const { users } = require('../models/userModel');
const { isFavorecido } = require('./userService');

function transfer(from, to, value) {
  if (!from || !to || typeof value !== 'number' || value <= 0) {
    return { success: false, message: 'Dados de transferência inválidos.' };
  }
  const sender = users.find(u => u.username === from);
  const recipient = users.find(u => u.username === to);
  if (!sender || !recipient) {
    return { success: false, message: 'Usuário remetente ou destinatário não encontrado.' };
  }
  if (!isFavorecido(from, to) && value >= 5000) {
    return { success: false, message: 'Transferências acima de R$ 5.000,00 só são permitidas para favorecidos.' };
  }
  const transferObj = { from, to, value, date: new Date() };
  transfers.push(transferObj);
  return { success: true, transfer: transferObj };
}

module.exports = { transfer };
