import * as React from 'react';
import { useState } from 'react';

export interface IContactFormProps {
    addContact: Function
}
//this needs infor from parent component, outside
//job of componenet is to display a list of contact cards
export function ContactForm(props: IContactFormProps) {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    // const [idNumber, setIdNumber] = useState<number>();

    const onSubmit= (e:React.FormEvent<HTMLElement>)  => {   e.preventDefault();
        props.addContact({ firstName: firstName, lastName: lastName, phoneNumber: phoneNumber});

        props.addContact({firstName: firstName, lastName: lastName, mobile: phoneNumber });

    }


  return (
      <div id = "ContactForm" className = "NewContact" >
          {/* <p>{idNumber}</p> */}
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{phoneNumber}</p>
         {/* // e.target.value saves input to the tag */}
          <form onSubmit={onSubmit}>
              
                {/* <label>Id Number</label> */}
                     {/* <input onChange={(e) => setIdNumber(e.target.value)} type="text" placeholder = "Type in your Unique Id"/> */}
                 <label>First Name</label>
                     <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder = "Type in your first name" />
                <label>Last Name</label>
                    <input onChange={(e) => setLastName(e.target.value)} type = "text" placeholder = "Type in your last name" />
                <label>Phone Number</label>
                     <input type="tel"onChange={(e) => setPhoneNumber(e.target.value)} />
              <button type="submit">Submit New Contact</button>
          </form>
          </div>
  );
}
