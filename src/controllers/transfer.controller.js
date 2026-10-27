import {
  createTransfer,
  getTransfers
} from '../services/transfer.service.js';

export function postTransfer(req, res) {
  const transfer = createTransfer(req.body);

  return res.status(201).json({
    data: transfer
  });
}

export function listTransfers(req, res) {
  const { studentId } = req.query;

  const transfers = getTransfers(studentId);

  return res.status(200).json({
    data: transfers
  });
}