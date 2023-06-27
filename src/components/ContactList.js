import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = (e) => {
    props.searchKeyWord(e.target.value);
  };
  return (
    <div className="ui celled list" style={{ marginTop: "60px" }}>
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui search">
        <div
          className="ui icon input"
          style={{ width: "100%", marginBottom: "13px" }}
        >
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      {renderContactList.length >0 ? renderContactList : <center><h3>No Contacts Available</h3></center>}
    </div>
  );
};

export default ContactList;
