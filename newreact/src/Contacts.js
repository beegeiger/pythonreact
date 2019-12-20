import React, { useState, useEffect } from 'react';
import { Contact } from './Contact';
import axios from 'axios';


export const Contacts = props => {
    const [data, setData] = useState({ hits: [] })
    useEffect(async () => {
        const result = await axios(
            'https://besafe.ngrok.io/contacts',
        );
        setData(result.data);
        console.log(result.data)
    });
    return (
        <>
        <Contact name="Test" phone="Test" email="Test" />
        <Contact name={ data.name } phone={ data.phone } email={ data.email } />
        </>
    );
    };

