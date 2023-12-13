import React, { useEffect, useState } from "react";
import ApiPhone from "../apis/ApiPhoneList";

function IphoneList() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // Fetch the phone list from the API
    ApiPhone.ApiPhoneList.then((response) => response.json()).then(
      (userPages) => setPhones(userPages.data)
    );
  }, []);

  const newPhone = {
    name: "ad",
    jor: "fdfd",
  };

  useEffect(() => {
    // Create a new phone using the create API
    ApiPhone.create(newPhone);
  }, []);

  return (
    <table id="bangdienthoai">
      <thead>
        <tr>
          <th>Hãng Điện Thoại</th>
          <th>Mô tả</th>
        </tr>
      </thead>
      <tbody>
        {phones.map((phone, index) => (
          <tr key={index}>
            <td>{phone.name}</td>
            <td>{phone.jor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IphoneList;
