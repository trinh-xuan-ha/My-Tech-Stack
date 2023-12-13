import React, { useState, useEffect } from "react"; // Added 'useEffect' for fetching data
import "../styles/table.css";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    let userApi = "http://localhost:3000/users";

    const getUsers = async () => {
      try {
        const response = await fetch(userApi);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getUsers();
  }

  return (
    <div className="table_call">
      <table id="tablephone">
        <thead>
          <tr>
            <th>USER</th>
            <th>ROLE</th>
            <th>PLAN</th>
            <th>BILLING</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div>
                  <img src={user.image} alt={`${user.name}'s avatar`} />
                  <div>
                    <h4>{user.name}</h4>
                    <span>{user.gmail}</span>
                  </div>
                </div>
              </td>
              <td>{user.role}</td>
              <td>{user.plan}</td>
              <td>{user.billing}</td>
              <td>{user.status}</td>
              <td>Actions here</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
