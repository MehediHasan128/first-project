// 2. Create a Schema corresponding to the document interface.

import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  StudentName,
} from './student/student.interface';

const studentNameSchema = new Schema<StudentName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const GuardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },

  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  constctNo: { type: String, required: true },
});

const studentSechema = new Schema<Student>({
  id: { type: String, required: true },
  name: studentNameSchema,
  gender: ['Male', 'Female'],
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  constctNo: { type: String, required: true },
  emergencyConatctNo: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: { type: String },
  isActive: ['active', 'blocked'],
});

// 3. Create a model
export const StudentModel = model<Student>('Student', studentSechema);
