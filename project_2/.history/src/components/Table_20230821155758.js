import React, { useState } from "react";
import CallApi from "../components/CallApi";
import From from "../components/From"; // Make sure the path is correct
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
    setShowForm(true); // Show the form for adding a new row
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
  };

  return (
    <div>
      <table id="tablephone">{/* Table content */}</table>

      {showForm && (
        <From onClose={handleCloseForm} onAddSuccess={handleAddSuccess} />
      )}
    </div>
  );
}

export default Table;
