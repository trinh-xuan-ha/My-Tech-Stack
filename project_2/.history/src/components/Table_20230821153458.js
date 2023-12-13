import React, { useState } from "react";
import CallApi from "../components/CallApi";
import "../styles/table.css";

function Table() {
  const [rows, setRows] = useState([]);

  const handleAddSuccess = (newRow) => {
    setRows([...rows, newRow]); // Update the state with the new row
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
            </tr>
          ))}
        </tbody>
      </table>

      <CallApi
        apiEndpoint={api} // API endpoint URL
        requestData={/* Data for new row */}
        onSuccess={handleAddSuccess}
        onError={handleAddError}
      />
    </div>
  );
}

export default Table;