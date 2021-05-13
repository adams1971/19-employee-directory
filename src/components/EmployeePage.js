import React, { useEffect, useState } from "react";
import API from "../utils/API";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    (async function () {
      const res = await API.getEmployees();
      setEmployees(res.data.results);
    })();
  }, []);
  return (
    <div>
      {console.log(employees)}
      <h1> Employee Directory! </h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th>photo</th>
          </tr>
        </thead>
        <tbody>
            {employees.map ((person, idx) => {
                console.log(person);
                return (
                    <tr key= {idx}>
                        <td>
                            {idx}
                        </td>
                        <td>
                            {person.name.first}
                        </td>
                        <td>
                            {person.name.last}
                        </td>
                        <td>
                            {person.email}
                        </td>
                        <td>
                            <img src= 
                            {person.picture.thumbnail}/>
                        </td>

                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeePage;
