import { beforeEach, describe, expect, it } from 'vitest';
import { getAllStudents, getStudent } from '../../../src/services/student.service.js';
import { resetData } from '../helpers/reset-data.js';

describe('student service', () => {
  beforeEach(resetData);

  it('devuelve todos los estudiantes', () => {
    const students = getAllStudents();

    expect(students).toHaveLength(3);
  });

  it('devuelve un estudiante existente', () => {
    const student = getStudent('stu-001');

    expect(student).toEqual({
      id: 'stu-001',
      name: 'Ana Torres',
      email: 'ana.torres@unipay.edu.pe',
      balance: 150
    });
  });

  it('lanza un error cuando el estudiante no existe', () => {
    expect(
      () => getStudent('stu-999')
    ).toThrow('Student was not found');
  });
});