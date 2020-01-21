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

    function handleClick() {
        document.getElementById("newContact").setState({view: "form"});
        document.getElemtntById("newConButton").hide()
    }

    const conlen = cons.length;
    const conret = []
    for (var i = 0; i < conlen; i++) {
        conret.push(<ContactContainer conId={ cons[i].contact_id } name={ cons[i].name } phone={ cons[i].phone } email={ cons[i].email } />)
    }

    return (
        <>
        { conret }
        <ContactContainer id="newContact" name="Placeholder" phone="Placeholder" email="Placeholder" view="None" />
        <button id="newConButton" class="ui button" onClick={ handleClick() }>Follow</button>
        </>
    );
    };

