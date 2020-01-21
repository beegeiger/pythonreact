import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { Contact } from './Contact';

export const ContactContainer = props => {
    const [visState, setVisState] = useState('conMain')
    
    let name = ''
    let email = ''
    let phone = ''

    if (typeof props.name !== 'undefined' || props.name.length > 0) {
        name = props.name
    }
    if (typeof props.email !== 'undefined' || props.email.length > 0) {
        email = props.email
    }
    if (typeof props.phone !== 'undefined' || props.phone.length > 0) {
        phone = props.phone
    }

    

    useEffect(() => {
        if (typeof props.view !== 'undefined' || props.name.length > 0) {
            setVisState(props.view);
        }
    }, []);
    
    let visa;

    return (
        <>
        {visState !== "None" &&
            <div class="ui cards">
                <div class="card">
                {visState === "conMain" &&      
                    <div id="conDisplay">
                        <Contact name={ name } phone={ phone } email={ email } viewFunction={ setVisState }/>
                        <div onclick={() => setVisState('form')} class="ui bottom attached button">
                            <i class="setting basic icon"></i>
                            Edit Contact
                        </div>
                    </div>
                }
                {visState === "form" &&
                    <div id="formDisplay">
                        <ContactForm name={ name } phone={ phone } email={ email } viewFunction={ setVisState }/>
                    </div>
                }    
                </div>
            </div>
        }
        </>
    );
};