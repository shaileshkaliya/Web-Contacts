import { useReducer, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactCard from './components/ContactCard';
import { v4 as uuid } from 'uuid';

function App() {

  const unique_id = uuid();
  const smallId = unique_id.slice(0,3);
  let list = [{name:"Shailesh Kaliya",number:9767205009,id:1},{name:"Nikhil Kaliya",number:9359055631,id:2},{name:"My Jio",number:7972793405,id:3}];


  const [contactList, setContactList] = useState(list);
  const[editContact,setEdiContact] = useState(null);

  let addToList = (contact) => {
    setContactList([...contactList, { ...contact ,id:smallId}]);
    // console.log(contactList)
  }

  let handleDlt = (toDltId) => {

    setContactList(contactList.filter(cntct=>cntct.id!==toDltId));
    // console.log("Deleted ")
  }
 
  let handleEdit = (editId) => {
    setEdiContact(contactList.find(cntct => cntct.id === editId))
    // console.log("Hello");
  }

  let updateContact = (contact) => {
    // console.log(contact)
    let index = contactList.findIndex(cntct => cntct.id === contact.id)
    let newContact = [...contactList];
    newContact.splice(index,1,contact);
    setContactList(newContact)
    setEdiContact(null);
  }

  return (
    <div className="container1">
      <div className="container">
        <div className="header">
          <Header> </Header>
        </div>
        <AddContact addToList = {addToList} editContact={editContact} updateContact={updateContact} ></AddContact>
        <div>
          <ContactCard handleDlt = {handleDlt} handleEdit = {handleEdit} contactList = {contactList}>
          </ContactCard>
        </div>
      </div>
    </div>
  );
}

export default App;
