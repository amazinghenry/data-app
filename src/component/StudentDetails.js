import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import studentsData from '../data/index.js';

const StudentDetail = () => {
  const [student, setStudent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedStudent = studentsData.find((student) => student.id === id);
    setStudent(selectedStudent);
  }, [id]);

  if (!student) {
    return <div className='App'>Loading...</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>First Name: {student.firstname}</p>
      <p>Last Name: {student.lastname}</p>
      <p>School: {student.school}</p>
      <p>Section: {student.class}</p>
      <p>Age: {student.age}</p>
    </div>
  );
};

export default StudentDetail;
