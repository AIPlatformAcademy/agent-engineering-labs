import { Router } from 'express';

import {
  getStudents,
  getStudentById
} from '../controllers/student.controller.js';

export const studentRouter = Router();

studentRouter.get(
  '/',
  getStudents
);

studentRouter.get(
  '/:studentId',
  getStudentById
);