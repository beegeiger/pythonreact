import React from 'react';
import { Contact } from './contact';
import { prefix } from "../urlprefix"

export const Contacts

export class ContactsHandler extends React.Component{
    componentWillMount() {
        let uri = prefix + "/view_contacts"
        const response = await fetch(uri);
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
      }
    render() {
        return(      
        )
    }
}