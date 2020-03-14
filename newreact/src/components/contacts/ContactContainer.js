import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Contact } from './Contact';

export const ContactContainer =({contactId, user_id, name = '', email = '', phone = '', view}) => {
    const [visState, setVisState] = useState(view);
    const [conId, setConId] = useState(contactId)
    useEffect(() => {
        if (view === "form") {
            console.log('visState');
            console.log('View is form')
            console.log(visState);
            setVisState('form');     
            
        }
    }, []);
   
    console.log('visState2');
    console.log(visState);


    const main = (visState === 'conMain')
    const conform = (visState === 'form')


    return (
            <div class="ui cards">
                <div class="card">
                {main &&
                    <div id="conDisplay">
                        <Contact conId={conId} name={ name } phone={ phone } email={ email } viewFunction={ setVisState }/>
                        <div onClick={() => setVisState('form')} class="ui bottom attached button">
                            <i class="setting basic icon"></i>
                            Edit Contact
                        </div>
                    </div>
                }
                {!main &&
                    <div id="formDisplay">
                        <ContactForm conId={conId} contactIdFunc={ setConId } user_id={user_id} name={ name } phone={ phone } email={ email } viewFunction={ setVisState }/>
                    </div>
                }    
                </div>
            </div>
    );
};