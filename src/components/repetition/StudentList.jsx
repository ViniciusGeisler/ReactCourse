import React from 'react';
import students from '../../data/students'

function StudentList(props) {
  const li1 = (
    <li>
      {students[0].id} {students[0].nome} - {students[0].nota}
    </li>
  );

  const studentsLi = students.map(student => {
    return (
      <li key={student.id}>
        {student.id} {student.nome} - {student.nota}
      </li>
    )
  })

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        <li>{studentsLi}</li>
      </ul>
    </div>
  )
}

export default StudentList
