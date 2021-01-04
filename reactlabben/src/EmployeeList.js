import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employess, setEmployess] = useState([
    {
      name: "Patrik Axelsson",
      email: "Patrikaxelsson84@gmail.com",
      phone: "0701111111",
      skills: "reactm c++, java nodejs",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Pelle Svensson",
      email: "Pellesvensson@gmail.com",
      phone: "0702222222",
      skills: "Pyton c++, Sql nodejs",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
  ]);

  function handleAddNewEmp() {
    setEmployess((prevState) => {
      return [
        ...prevState,
        {
          name: "Geralt of Rivia",
          email: "gralt@hotmail.com",
          phone: "0703333333",
          skills: "none",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }

  return (
    <>
      <h3>EmployeeList</h3>
      <button className="button" onClick={handleAddNewEmp}>
        Add Employee
      </button>
      {employess.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </>
  );
}

export default EmployeeList;
