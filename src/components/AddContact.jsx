import { useEffect, useState } from "react";
import "./AddContact.css";

let AddContact = ({addToList,editContact,updateContact}) => {
  let data = { name: "", number: "",id:"" };
  // let btnName = "Add Contact";
  // const[btn,setBtn] = useState(btnName);
  // let list = [];
  // const [contactList, setContactList] = useState(list);

  const [contact, setContact] = useState(data);

  let handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
      if(editContact){
        if (contact.name == "" || contact.number == "") {
          alert("All fields are mandatory");
        }else{
          updateContact(contact)
        }
      }else{
        if (contact.name == "" || contact.number == "") {
          alert("All fields are mandatory");
        }else{
          addToList(contact);
        }
      }
      // setBtn(btnName)
      setContact(data);
    
  };

  useEffect(()=>{
    if(editContact){
      setContact(editContact);
      // setBtn("Edit");
    }
  },[editContact])
  return (
    <div className="form-div">
      <form action="post">
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <input
          type="number"
          name="number"
          value={contact.number}
          onChange={handleChange}
          placeholder="Enter Number"
        />
        <input type="submit" value={editContact ? "Edit Video" : "Add Video"} onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default AddContact;
