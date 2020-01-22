import React, { useState, useEffect, useCallback } from 'react';
import { ContactContainer } from './ContactContainer';



export const ContactsHandler = props => {
    const [cons, setCons] = useState({});
    const [, updateState] = React.useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const conret = []

    // useEffect(() => {
    //     function fetchData() {
    //       const res = fetch("http://127.0.0.1:5000/contacts");
    //       res
    //         .then(res => setCons(res))
    //         .catch(function(error) {
    //             console.log('Looks like there was a problem: \n', error);
    //           });
    //     }
    
    //     fetchData();
    // }, []);

    

    const conlen = cons.length;
    
    for (var i = 0; i < conlen; i++) {
        conret.push(<ContactContainer conId={ cons[i].contact_id } name={ cons[i].name } phone={ cons[i].phone } email={ cons[i].email } view="conMain" />)
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
        <ContactContainer conId="newContact" name="a" phone="basfasf" email="c" view="conMain" />
        <ContactContainer conId="newContact" name="azsfzsf" phone="b" email="c" view="form" />
        <button id="newConButton" class="ui button" onClick={ handleClick }>Add New Contact</button>
        </>
    );
    };

