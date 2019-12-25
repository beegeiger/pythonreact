import React, { useState, useEffect } from 'react';
import { ContactContainer } from './ContactContainer';



export const ContactsHandler = props => {
    const [cons, setCons] = useState({});
    
    useEffect(() => {
        async function fetchData() {
          const res = await fetch("http://127.0.0.1:5000/contacts");
          res
            .json()
            .then(res => setCons(res))
            .catch(function(error) {
                console.log('Looks like there was a problem: \n', error);
              });
        }
    
        fetchData();
    }, []);

    const conlen = cons.length;
    const conret = []
    for (var i = 0; i < conlen; i++) {
        conret.push(<ContactContainer name={ cons[i].name } phone={ cons[i].phone } email={ cons[i].email } />)
    }

    return (
        <>
        <ContactContainer name="Placeholder" phone="Placeholder" email="Placeholder" />
        { conret }
        </>
    );
    };

