import { useState } from "react";
import { Contact } from "../interfaces/Contact"; 
import ContactCard from "./ContactCard";
import { ContactForm } from "./ContactForm";

//the job of this component is to display a list of contact cards
//imperative vs. declarative
//Contact list owns the state= PARENT
function ContactList(){
    const [contacts, setContacts] = useState<Contact[]>(
        [ { firstName: "Lou", lastName: "Gehrig", mobile: "555-121-1212" },
           { firstName: "Fred", lastName: "Flintstone", mobile: "111-121-1212" },
            { firstName: "Barney", lastName: "Rubble", mobile: "222-121-1212" }]
);
   
function addContact(contact: Contact) {
    setContacts([...contacts, contact]);

}

//this needs infor from parent component, outside
//job of componenet is to display a list of contact cards
//imperative vs declarative programming
// function ContactList() {
//     const[contacts, setContacts]= useState<Contact[]>(
        return(
            <div className="ContactList">
                <ContactForm addContact = {addContact}/>
                { contacts.map((contact) => <ContactCard contact={contact} />) }
            </div>
            )
        }
        
export default ContactList;
        