import React, { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs"; // Added 'useEffect' for fetching data
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiEdit } from "react-icons/ti"; // Added 'useEffect' for fetching data
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineComputer } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
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
        console.error("Error:", error);
      }
    };

    getUsers();
  }

  return (
    <div className="table_call">
      <table id="tablephone">
        <thead>
          <tr>
            <th className="user_padding">USER</th>
            <th className="user_padding">ROLE</th>
            <th className="user_padding">PLAN</th>
            <th className="user_padding">BILLING</th>
            <th className="user_padding">STATUS</th>
            <th className="user_padding">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user_image_icon">
                  <img src={user.image} alt={`${user.name}'s avatar`} />
                  <div className="user_name">
                    <h4>{user.name}</h4>
                    <span>{user.gmail}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="user_image">
                  <AiOutlineCheckCircle />
                  {user.role}
                </div>
              </td>
              <td>
                <div className="user_image">{user.plan}</div>
              </td>
              <td>
                <div className="user_image">{user.billing} </div>
              </td>
              <td>
                <div className="user_image">{user.status}</div>
              </td>
              <td>
                <div className="user_image">
                  <BsTrash3 />
                  <TiEdit />
                  <BsThreeDotsVertical />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
