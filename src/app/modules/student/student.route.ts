import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// Will call controler function
router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/:studentId', StudentController.getSingleStudent);

export const StudentRoutes = router;
