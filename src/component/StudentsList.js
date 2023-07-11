import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentCard from './StudentCard';
import studentsData from '../data/index.js';

const StudentsList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (studentsData.length > 0) {
    setStudents(studentsData);
    }
  }, []);

  return (
    <div>
        <h2 className='App'> Student List</h2>
    
    <div className='student-group'>
      {students.map((student) => (
        <Link to={`/student/${student.id}`} key={student.id} className='student-item'>
          <StudentCard
            key={student.id}
            firstname={student.firstname}
            lastname={student.lastname}
            school={student.school}
            section={student.class}
            age={student.age}
          />
        </Link>
      ))}
    </div>
    </div>
  );
};

export default StudentsList;
