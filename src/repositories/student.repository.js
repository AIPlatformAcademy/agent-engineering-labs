import { initialStudents } from '../data/seed.js';

let students = structuredClone(initialStudents);

export function findAllStudents() {
  return students;
}

export function findStudentById(studentId) {
  return students.find(
    (student) => student.id === studentId
  );
}

export function updateStudentBalance(studentId, newBalance) {
  const student = findStudentById(studentId);

  if (!student) {
    return undefined;
  }

  student.balance = newBalance;

  return student;
}

export function resetStudents() {
  students = structuredClone(initialStudents);
}