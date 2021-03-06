import React, { useState, useEffect, useCallback } from 'react';
import { ContactContainer } from './ContactContainer';


export const ContactsHandler = ({user_id, name = '', email = '', phone = ''}) => {
    const [contacts, setContacts] = useState([]);
    console.log('Contacts Handler User_id:', user_id, {user_id})
    const [showNewContact, setShowNewContact] = useState([]);
    const uId = user_id
    const fetchData = useCallback(async () => {
      try {
        const response = await fetch(("http://127.0.0.1:5000/contacts"), {
          method: 'POST', // or 'PUT'
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({'user_id': {user_id}}, null, '  '),
        }
        );
        const data = await response.json()
        console.log('got a response', data);
        setContacts(data);
      } catch (error) {
        console.log("Looks like there was a problem: \n", error);
      }
    }, [setContacts])
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <>
        {contacts.map(contact => (
          <ContactContainer
            user_id={user_id}
            contactId={contact.contact_id}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            view="conMain"
          />
        ))}
        {showNewContact.map(() => (
          <ContactContainer
            user_id={user_id}
            contactId="new"
            view="form"
          />
        ))}
        <button
          id="newConButton"
          class="ui button"
          onClick={() => setShowNewContact([...showNewContact, true])}
        >
          Add New Contact
        </button>
      </>
    );
  };