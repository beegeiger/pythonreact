import React, { useState } from 'react';

export const ContactForm = props => {
    const name = props.name
    const email = props.email
    const phone = props.phone
    let conId = 'new'
    const setVisState = props.viewFunction

    if (typeof props.ConId !== 'undefined') {
        conId = props.conId
    }

    const [formName, setFormName] = useState(name)
    const [formEmail, setFormEmail] = useState(email)
    const [formPhone, setFormPhone] = useState(phone)

    function handleSave() {
        let conForm = {'name': formName, 'email': formEmail, 'phone': formPhone}
        fetch(('http://127.0.0.1:5000/save_contact/' + conId), {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(conForm),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            conId = data;
            props.conId = data;
            setVisState('conMain');
        })
            .catch((error) => {
            console.error('Error:', error);
        });
        
    }

    function handleDelete() {
        fetch(('http://127.0.0.1:5000/delete_contact' + conId), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'conId': conId}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            setVisState('delete');
        })
            .catch((error) => {
            console.error('Error:', error);
        });
        
    }
    

    return (
        <div class="content">
            <form class="ui form">
                <div class="header">
                    <div class="field">
                        <input type="text" name="name" placeholder="Contact Name" value={ name } onChange={(e) => { setFormName(e.target.value) }} required/>
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="email" placeholder="Contact E-mail" value={ email } onChange={(e) => { setFormEmail(e.target.value) }} />
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="phone" placeholder="Contact Phone #" value={ phone } onChange={(e) => { setFormPhone(e.target.value) }} />
                    </div>
                </div>
                <div class="ui bottom attached button">
                        <i class="setting basic icon"></i>
                        Save Contact
                    </div>
                    <div class="ui bottom attached button">
                        <i class="cancel circle basic icon"></i>
                        Delete Contact
                    </div> 
            </form>
        </div>
    );
};