import { useState } from "react";
import React from 'react';
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, } from "reactstrap";
import { Contact } from "../interfaces/Contact"; 
import ContactCard from "./ContactCard";
import { ContactForm } from "./ContactForm";
import 'bootstrap/dist/css/bootstrap.min.css';


// interface ContactListProps{
//     contacts: Contact[]
// }

//THIS IS THE PARENT****the job of this component is to display a list of contact cards
//imperative vs. declarative
//Contact list owns the state= PARENT
function ContactList(){
    const [contacts, setContacts] = useState<Contact[]>(
        [ { id: 1, firstName: "Lou", lastName: "Gehrig", mobile: "555-121-1212" },
           { id: 2, firstName: "Fred", lastName: "Flintstone", mobile: "111-121-1212" },
            { id: 3, firstName: "Barney", lastName: "Rubble", mobile: "222-121-1212" }]
  );
  
  function getNextId() {
    return Math.max(...contacts.map((x) => x.id)) + 1;
  }
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [open, setOpen] = useState(false);
  

    //PARENT IN NO ACTIVITY CALL BACK LATER SEE CONTACTFORM LINE 17
  function addContact(contact: Contact) {
    contact.id = getNextId();
    setContacts([...contacts, contact]); toggle();

}


//imperative vs declarative programming
// function ContactList() {
//    

        return (
          <div className="ContactList">
            <Button color="danger" onClick={() => setOpen(true)}>Add Contact</Button>
            <Modal isOpen={open} toggle={() => setOpen(false)}>
              <ModalHeader className="newContact" toggle={() => setOpen(false)}>New Contact Information</ModalHeader>
              <ModalBody className = "contactCard">
                <ContactForm addContact={addContact} />
              </ModalBody>
            </Modal>                
            {contacts.map((contact) => <ContactCard contact={contact} />)}
          </div>
        )
               
}
        
export default ContactList;

        