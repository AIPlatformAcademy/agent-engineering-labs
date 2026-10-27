import {
  findAllStudents,
  findStudentById
} from '../repositories/student.repository.js';

import {
  ApplicationError
} from '../errors/application-error.js';

export function getAllStudents() {
  return findAllStudents();
}

export function getStudent(studentId) {
  const student = findStudentById(studentId);

  if (!student) {
    throw new ApplicationError(
      'STUDENT_NOT_FOUND',
      'Student was not found',
      404
    );
  }

  return student;
}