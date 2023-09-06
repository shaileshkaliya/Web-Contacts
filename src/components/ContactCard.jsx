import { useState } from "react";
import "./ContactCard.css";
import icon from '../assets/avatar.png'
import edit from '../assets/edit.png'
import dlt from '../assets/delete.png'

let ContactCard = ({ contactList,handleDlt, handleEdit}) => {
  let contactData = contactList.map((contact) => (
    <div className="card" key={contact.id}>
        <div className="profile-img-div">
            <div className="profile-img">

                <img id="edit-icon" src={edit} alt="edit" onClick={() => handleEdit(contact.id)}/>
                <img id="dlt-icon" src={dlt} alt="delete" onClick={() => handleDlt(contact.id)} />
                <img src={icon} alt="profile"/>
            </div>
        </div>

        <div className="details" >
            <div className="contactName">
                {contact.name+" "+contact.id}
            </div>
 
            <div className="contactNumber">
                {contact.number}
            </div>
        </div>
    </div>
  ));

  return (
    <div className="container-2">
        <div className="wrapper">
            {contactData}
        </div>
    </div>
  );
};

export default ContactCard;
