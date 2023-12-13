import React, { useState } from "react";
import CallApi from "../components/CallApi";
import "../styles/table.css";

const api = "https://api.tablebackend.com/v1/rows/FDl8ROt2Os8X";

function Table() {
  const [rows, setRows] = useState([]);

  const handleAddSuccess = (newRow) => {
    // Update the state with the new row and existing rows
    setRows([...rows, newRow]);
  };

  const handleAddError = (errorMessage) => {
    console.error(errorMessage); // Handle error case
  };

  return (
    <div>
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
          {/* Render existing rows */}
          {rows.map((row, index) => (
            <tr key={index}>
              {/* Render row data */}
              <td>
                {row.fullname} <br />
                {row.email}
              </td>
              <td>{row.select_role}</td>
              <td>{row.select_plan}</td>
              <td>{row.billing}</td>
              <td>{row.select_status}</td>
              <td>{/* Actions */}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CallApi
        apiEndpoint={api} // API endpoint URL
        requestData={{
          fullname: "New User",
          email: "newuser@example.com",
          select_role: "User",
          select_plan: "Basic",
          billing: "$19.99",
          select_status: "Active",
        }}
        onSuccess={handleAddSuccess}
        onError={handleAddError}
      />
    </div>
  );
}

export default Table;
