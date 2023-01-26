import { useState } from "react";
import ContactList from "./ContactList";
import { Contact } from "../interfaces/Contact"; 



function Home() {
    //state that holds array of contacts
    const [contacts, setContacts] = useState<Contact[]>(
         [ { firstName: "Lou", lastName: "Gehrig", mobile: "555-121-1212" },
            { firstName: "Fred", lastName: "Flintstone", mobile: "111-121-1212" },
            { firstName: "Barney", lastName: "Rubble", mobile: "222-121-1212" },
        ]
    );    

    function addContact(contact: Contact) {
        setContacts([....contacts, contact]);
    }
    return (
        <div className="Home">
            <ContactList contacts= {contacts}    />
                    </div>
    )
}

export default Home