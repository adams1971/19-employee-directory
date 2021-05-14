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
//   const sortByLastName =() => {
//       employees.sort()
//   }
  return (
    <div>
      {console.log(employees)}
      
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Date of Hire</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
            {employees.map ((person, idx) => {
                console.log(person);
                return (
                    <tr key= {idx}>
                        <td>
                            <img src= 
                            {person.picture.thumbnail}/>
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
                            {person.registered.date}
                        </td>
                        <td>
                            {person.location.city}
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
