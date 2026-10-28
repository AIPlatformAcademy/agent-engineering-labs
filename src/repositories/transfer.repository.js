import { randomUUID } from 'node:crypto';
import { initialTransfers } from '../data/seed.js';

let transfers = structuredClone(initialTransfers);

export function findAllTransfers() {
  return transfers;
}

export function saveTransfer(transfer) {
  const savedTransfer = {
    id: randomUUID(),
    ...transfer,
    status: 'COMPLETED',
    createdAt: new Date().toISOString()
  };

  transfers.push(savedTransfer);

  return savedTransfer;
}

export function resetTransfers() {
  transfers = structuredClone(initialTransfers);
}