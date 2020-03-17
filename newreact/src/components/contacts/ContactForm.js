import React, { useState, useCallback } from 'react';
import user from '../../App';

export const ContactForm =({viewFunction, contactIdFunc, conId='new', user_id, name = '', email = '', phone = '', view}) => {
    console.log('Contacts Form User_id:', user_id, {user_id})
    const setVisState = viewFunction
    const setConId = contactIdFunc

    const [formName, setFormName] = useState(name)
    const [formEmail, setFormEmail] = useState(email)
    const [formPhone, setFormPhone] = useState(phone)

    
    const handleSave = useCallback(async () => {
        try {
            let conForm = {'user_id': user_id, 'name': formName, 'email': formEmail, 'phone': formPhone, 'contact_id': conId}
            console.log('conForm: ', conForm)
            console.log(JSON.stringify(conForm))
            const response = await fetch(('http://127.0.0.1:5000/edit_contact/' + conId), {
                method: 'POST', // or 'PUT'
                headers: { 'Access-Control-Allow-Origin': null,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(conForm),
            });
            const data = await response.json()
            console.log('got a response', data);
            setConId(data.new_contact_id)
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
                        <input type="text" name="name" placeholder="Contact Name" value={ formName } onChange={(e) => { setFormName(e.target.value); console.log('setFormName Called!', formName); }} required/>
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