import React, { useState, useEffect } from 'react';
import { Contact } from './contact';
import axios from 'axios';


export const Contacts = props => (
    const [data, setData] = useState({ hits: [] });
    useEffect(async () => {
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux',
        );
        setData(result.data);
    });
    return (
        <Contact name="" phone="" email="" />
    )
)

