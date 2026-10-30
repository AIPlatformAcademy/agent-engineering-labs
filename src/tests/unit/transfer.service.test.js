import { beforeEach, describe, expect, it } from 'vitest';
import { createTransfer, getTransfers } from '../../../src/services/transfer.service.js';
import { findStudentById } from '../../../src/repositories/student.repository.js';
import { findAllTransfers } from '../../../src/repositories/transfer.repository.js';
import { resetData } from '../helpers/reset-data.js';

describe('transfer service', () => {
  beforeEach(resetData);

  it('crea una transferencia válida entre dos estudiantes', () => {
    const transfer = createTransfer({
      senderId: 'stu-001',
      receiverId: 'stu-002',
      amount: 25,
      description: 'Almuerzo'
    });

    expect(transfer).toMatchObject({
      senderId: 'stu-001',
      receiverId: 'stu-002',
      amount: 25,
      description: 'Almuerzo',
      status: 'COMPLETED'
    });

    expect(transfer.id).toBeDefined();
    expect(transfer.createdAt).toBeDefined();
  });

  it('actualiza ambos balances después de una transferencia válida', () => {
    createTransfer({
      senderId: 'stu-001',
      receiverId: 'stu-002',
      amount: 25
    });

    const sender = findStudentById('stu-001');
    const receiver = findStudentById('stu-002');

    expect(sender.balance).toBe(125);
    expect(receiver.balance).toBe(105);
  });

  it('registra una transferencia válida', () => {
    createTransfer({
      senderId: 'stu-001',
      receiverId: 'stu-002',
      amount: 25
    });

    const transfers = findAllTransfers();

    expect(transfers).toHaveLength(1);

    expect(transfers[0]).toMatchObject({
      senderId: 'stu-001',
      receiverId: 'stu-002',
      amount: 25,
      status: 'COMPLETED'
    });
  });

  it('rechaza una transferencia si el emisor no existe', () => {
    expect(() =>
      createTransfer({
        senderId: 'stu-999',
        receiverId: 'stu-002',
        amount: 25
      })
    ).toThrow('Sender or receiver was not found');

    expect(findAllTransfers()).toHaveLength(0);
  });

  it('rechaza una transferencia si el receptor no existe', () => {
    expect(() =>
      createTransfer({
        senderId: 'stu-001',
        receiverId: 'stu-999',
        amount: 25
      })
    ).toThrow('Sender or receiver was not found');

    expect(findAllTransfers()).toHaveLength(0);
  });

  it('devuelve todas las transferencias', () => {
    createTransfer({
      senderId: 'stu-001',
      receiverId: 'stu-002',
      amount: 10
    });

    createTransfer({
      senderId: 'stu-002',
      receiverId: 'stu-003',
      amount: 5
    });

    const transfers = getTransfers();

    expect(transfers).toHaveLength(2);
  });

  it('filtra las transferencias relacionadas con un estudiante', () => {
    createTransfer({
      senderId: 'stu-001',
      receiverId: 'stu-002',
      amount: 10
    });

    createTransfer({
      senderId: 'stu-002',
      receiverId: 'stu-003',
      amount: 5
    });

    const transfers = getTransfers('stu-001');

    expect(transfers).toHaveLength(1);

    expect(transfers[0]).toMatchObject({
      senderId: 'stu-001',
      receiverId: 'stu-002'
    });
  });
});