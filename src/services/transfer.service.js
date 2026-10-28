import { findStudentById, updateStudentBalance } from '../repositories/student.repository.js';
import { findAllTransfers, saveTransfer } from '../repositories/transfer.repository.js';
import { ApplicationError } from '../errors/application-error.js';

export function getTransfers(studentId) {
  const transfers = findAllTransfers();

  if (!studentId) {
    return transfers;
  }

  return transfers.filter(
    (transfer) =>
      transfer.senderId === studentId ||
      transfer.receiverId === studentId
  );
}

export function createTransfer({
  senderId,
  receiverId,
  amount,
  description
}) {
  const sender = findStudentById(senderId);
  const receiver = findStudentById(receiverId);

  if (!sender || !receiver) {
    throw new ApplicationError(
      'STUDENT_NOT_FOUND',
      'Sender or receiver was not found',
      404
    );
  }

  if (!amount) {
    throw new ApplicationError(
      'INVALID_AMOUNT',
      'Amount is required',
      400
    );
  }

  updateStudentBalance(
    senderId,
    sender.balance - amount
  );

  updateStudentBalance(
    receiverId,
    receiver.balance + amount
  );

  return saveTransfer({
    senderId,
    receiverId,
    amount,
    description
  });
}