import React, { useState, useCallback } from 'react';

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

    
    const handleSave = useCallback(async () => {
        try {
            let conForm = {'name': formName, 'email': formEmail, 'phone': formPhone}
            const response = await fetch(('http://127.0.0.1:5000/edit_contact/' + conId), {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(conForm),
            });
            const data = await response.json()
            console.log('got a response', data);
            setVisState('conMain');
        }   catch (error) {
            console.log("Looks like there was a problem: \n", error);
        }
      }, [])

    

    function handleDelete() {
        fetch(('http://127.0.0.1:5000/delete_contact/' + conId), {
            method: 'Delete',
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
                        <input type="text" name="name" placeholder="Contact Name" value={ formName } onChange={(e) => { setFormName(e.target.value) }} required/>
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="email" placeholder="Contact E-mail" value={ formEmail } onChange={(e) => { setFormEmail(e.target.value) }} />
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="phone" placeholder="Contact Phone #" value={ formPhone } onChange={(e) => { setFormPhone(e.target.value) }} />
                    </div>
                </div>
                <div class="ui bottom attached button" onClick={ handleSave }>
                        <i class="setting basic icon" ></i>
                        Save Contact
                    </div>
                    <div class="ui bottom attached button" onClick={ handleDelete }>
                        <i class="cancel circle basic icon" ></i>
                        Delete Contact
                    </div> 
            </form>
        </div>
    );
};