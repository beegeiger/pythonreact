import React, { useState, useEffect, useCallback } from 'react';
import { ContactContainer } from './ContactContainer';



export const ContactsHandler = props => {
    const [cons, setCons] = useState({});
    const [, updateState] = React.useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const conret = []

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
    
    for (var i = 0; i < conlen; i++) {
        conret.push(<ContactContainer conId={ cons[i].contact_id } name={ cons[i].name } phone={ cons[i].phone } email={ cons[i].email } />)
    }

    function handleClick() {
        conret.push(<ContactContainer conId="newContact" name="" phone="" email="" view="form" />);
        console.log('Button Pushed');
        console.log(conret);
        forceUpdate();
    }

    return (
        <>
        { conret }
        <ContactContainer conId="newContact" name="a" phone="b" email="c" view="form" />
        <button id="newConButton" class="ui button" onClick={ handleClick }>Add New Contact</button>
        </>
    );
    };

