import * as React from 'react';
import { useState } from 'react';
export interface IContactFormProps {
    addContact: Function
}

export function ContactForm(props: IContactFormProps) {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    function onSubmit(e: React.FormEvent<HTMLElement>) {
        e.preventDefault();

        props.addContact({ firstName: firstName, lastName: lastName, mobile: phoneNumber });

    }


  return (
      <div>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{phoneNumber}</p>
          <form onSubmit ={onSubmit}>
              <label>First Name</label>
              <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder = "Type in your first name" />
                  <label>Last Name</label>
              <input type="text" onChange={(e) => setLastName(e.target.value)} />
              <label>Phone Number</label>
              <input type="tel"onChange={(e) => setPhoneNumber(e.target.value)} />
              <button type="submit"></button>
          </form>
          </div>
  );
}
