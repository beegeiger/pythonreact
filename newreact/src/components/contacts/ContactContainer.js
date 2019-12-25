import React from 'react';
import { ContactForm } from 'ContactForm';
import { Contact } from 'Contact';

export const Contact = props => {
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

    return (
        <div class="ui cards">
            <div class="card">
                <Contact name={ name } phone={ phone } email={ email } />
                <ContactForm name={ name } phone={ phone } email={ email } class='hidden' />
            </div>
        </div>
    );
};