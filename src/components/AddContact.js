import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddContact = ({ addContactHandler }) => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    name: "",
    email: "",
  });

  const addHandler = (e) => {
    e.preventDefault();
    if (detail.name === "" && detail.email === "") {
      alert("All the fields are mandatory!");
    }

    addContactHandler(detail);

    setDetail({
      name: "",
      email: "",
    });

    navigate("/");
  };

  return (
    <div className="ui main">
      <h2 style={{ marginTop: "50px" }}>Add Contact</h2>
      <form className="ui form" onSubmit={addHandler}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={detail.name}
            onChange={(e) => {
              setDetail({ ...detail, name: e.target.value });
            }}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={detail.email}
            onChange={(e) => {
              setDetail({ ...detail, email: e.target.value });
            }}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
