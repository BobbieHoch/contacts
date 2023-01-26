import { Contact } from "../interfaces/Contact"; 
import ContactCard from "./ContactCard";

interface ContactListProps{
    contacts: Contact[]
}

//this needs infor from parent component, outside
//job of componenet is to display a list of contact cards
//imperative vs declarative programming
function ContactList(props:ContactListProps) {
    return (
        <div className="ContactList">
            {props.contacts.map((contact) => <ContactCard contact ={contact} />)  }

        </div>
    )
}

export default ContactList;