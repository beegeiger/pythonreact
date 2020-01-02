import React from 'react';
import { ContactForm } from './ContactForm';
import { Contact } from './Contact';

export const ContactContainer = props => {
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

    let [visState, setVisState] = useState('display')

    return (
        <div class="ui cards">
            <div class="card">
                <div id="conDisplay">
                    <Contact name={ name } phone={ phone } email={ email } />
                    <div class="ui bottom attached button">
                        <i class="setting basic icon"></i>
                        Edit Contact
                    </div>
                </div>
                <div id="formDisplay">
                    <ContactForm name={ name } phone={ phone } email={ email } vis='hidden' />
                    <div class="ui bottom attached button">
                        <i class="setting basic icon"></i>
                        Save Contact
                    </div>
                    <div class="ui bottom attached button">
                        <i class="cancel circle basic icon"></i>
                        Delete Contact
                    </div> 
                </div>
            </div>
        </div>
    );
};