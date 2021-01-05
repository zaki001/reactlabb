import { useEffect, useState } from 'react';
import Employee from './Employee';
function EmployeeList() {
  const [employess, setEmployess] = useState([
    {
      name: 'Zaki Ehsanyar',
      email: 'ahmadzaki.af@gmail.com',
      phone: '076227892',
      skills: 'git, github, javaScript, java, html, css',
      avatar: 'https://i.imgur.com/ebHfuth.png'
    },
    {
      name: 'Test',
      email: 'test@gmail.com',
      phone: '076227892',
      skills: 'git, github, javaScript, java, html, css',
      avatar: 'https://i.imgur.com/t9HFQvX.png'
    }
  ]);

  function handelAddNewEmp() {
    setEmployess((prevState) => {
      return [
        ...prevState,
        {
          name: 'Kingstone',
          email: 'kingston@gmail.com',
          phone: '071111100',
          skills: 'Git and Github',
          avatar: 'https://i.imgur.com/Q9qFt3m.png'
        }
      ];
    });
  }
  return (
    <div>
      <h3>EmployeeList</h3>
      <button onClick={handelAddNewEmp}>Add Employee</button>
      {employess.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </div>
  );
}
export default EmployeeList;
