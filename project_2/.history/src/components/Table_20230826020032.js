import React, { useState } from "react";
import CallApi from "../components/CallApi";
import "../styles/table.css";

function Table() {
  return (
    <div className="table_call">
      <table id="tablephone">
        <tr>
          <th>USER</th>
          <th>ROLE</th>
          <th>PLAN</th>
          <th>BILLING</th>
          <th>STATUS</th>
          <th>ACTIONS</th>
        </tr>
        <tr></tr>
      </table>
    </div>
  );
}

export default Table;
