import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Contact } from './Contact';

export const ContactContainer = props => {
    const [visState, setVisState] = useState(props.view);

    let name = ''
    let email = ''
    let phone = ''
    let view = ''

    if (typeof props.name !== 'undefined') {
        name = props.name
    }
    if (typeof props.email !== 'undefined') {
        email = props.email
    }
    if (typeof props.phone !== 'undefined') {
        phone = props.phone
    }


    

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
    console.log(props)

    const main = (visState === 'conMain')
    const conform = (visState === 'form')


    return (
            <div class="ui cards">
                <div class="card">
                {main &&
                    <div id="conDisplay">
                        <Contact name={ name } phone={ phone } email={ email } viewFunction={ setVisState }/>
                        <div onClick={() => setVisState('form')} class="ui bottom attached button">
                            <i class="setting basic icon"></i>
                            Edit Contact
                        </div>
                    </div>
                }
                {!main &&
                    <div id="formDisplay">
                        <ContactForm name={ name } phone={ phone } email={ email } viewFunction={ setVisState }/>
                    </div>
                }    
                </div>
            </div>
    );
};