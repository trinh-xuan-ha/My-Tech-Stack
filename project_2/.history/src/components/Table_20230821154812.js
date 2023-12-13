import React, { useState } from "react";
import CallApi from "../components/CallApi";
import From from "../components/From"; // Đảm bảo đường dẫn chính xác
import "../styles/table.css";

const api = "https://api.tablebackend.com/v1/rows/FDl8ROt2Os8X";

function Table() {
  const [rows, setRows] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddSuccess = (newRow) => {
    setRows([...rows, newRow]); // Update the state with the new row
    setShowForm(false); // Hide the form after successful addition
  };

  const handleAddError = (errorMessage) => {
    console.error(errorMessage); // Handle error case
  };

  const handleAddRowClick = () => {
    setShowForm(true); // Show the form for adding new row
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
  };

  return (
    <div>
      <table id="tablephone">
        <thead>{/* ... */}</thead>
        <tbody>
          {/* Render existing rows */}
          {rows.map((row, index) => (
            <tr key={index}>{/* ... */}</tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <From onClose={handleCloseForm} onAddSuccess={handleAddSuccess} />
      )}

      <button className="add-row-button" onClick={handleAddRowClick}>
        Add New Row
      </button>
    </div>
  );
}

export default Table;
