import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const EditContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;
  console.log(id, name, email);
  const [detail, setDetail] = useState({ name: name, email: email, id: id });
  const updateHandler = (e) => {
    e.preventDefault();
    if (detail.name === "" && detail.email === "") {
      alert("All the fields are mandatory!");
    }

    updateContactHandler(detail);

    setDetail({
      name: "",
      email: "",
    });

    navigate("/");
  };
  return (
    <div className="ui main">
      <h2 style={{ marginTop: "50px" }}>Edit Contact</h2>
      <form className="ui form" onSubmit={updateHandler}>
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
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
