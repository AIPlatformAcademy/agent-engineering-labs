import { getAllStudents, getStudent } from '../services/student.service.js';

export function getStudents(req, res) {
  const students = getAllStudents();

  return res.status(200).json({
    data: students
  });
}

export function getStudentById(req, res) {
  const { studentId } = req.params;

  const student = getStudent(studentId);

  return res.status(200).json({
    data: student
  });
}