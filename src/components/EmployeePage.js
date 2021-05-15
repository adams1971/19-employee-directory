import React, { useEffect, useState } from "react";
import API from "../utils/API";
// import Navbar from "./Navbar";
// import Navbar from "../Navbar/index";
// import SearchForm from "../Filter";

function EmployeePage() {
  const [employees, setEmployees] = useState([]);
  const [filterEmployees, setFilterEmployees] = useState([]);

  useEffect(() => {
    (async function () {
      const res = await API.getEmployees();
      setEmployees(res.data.results);
      setFilterEmployees(res.data.results);
    })();
  }, []);

  const handleFilter = (event) => {
    const filterText = event.target.value.toLowerCase();
    const filterEmp = employees.filter((employee) => {
      return employee.name.last.toLowerCase().indexOf(filterText) > -1
    })
    setFilterEmployees(filterEmp)
  }

  const sortByLastName = () => {
    console.log("sort by last name only")
      setEmployees((employees) => [...employees.sort((a, b) => {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
        return 0
      })])
    }
  return (
    <div className="body">
      
      
      
      {/* <SearchForm handleFilter={handleFilter} /> */}
      <table className="table table-striped table-sortable">
        <thead>
          <tr>
            <th>Photo</th>
            <th onClick={() => sortByLastName()}>Last Name</th>
            <th>First Name</th>
            <th>email</th>
            <th>Date of Hire</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
            {filterEmployees.map ((person, idx) => {
                console.log(person);
                return (
                    <tr key= {idx}>
                        <td>
                            <img src= 
                            {person.picture.thumbnail}/>
                        </td>
                        <td>{person.name.last}</td>
                        <td>{person.name.first}</td>
                        <td>{person.email}</td>
                        <td>{person.registered.date}</td>
                        <td>{person.location.city}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
  
}

export default EmployeePage;
