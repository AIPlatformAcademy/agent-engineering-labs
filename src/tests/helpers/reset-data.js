import { resetStudents } from '../../repositories/student.repository.js';
import { resetTransfers } from '../../repositories/transfer.repository.js';

export function resetData() {
  resetStudents();
  resetTransfers();
}