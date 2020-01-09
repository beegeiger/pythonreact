import React from 'react';


export const Contact = props => {
    const name = props.name
    const email = props.email
    const phone = props.phone
    const conId = props.conID
    return (
        <>
        <div class="content">
            <div class="header">
                Name: { name } 
            </div>
            <div class="description">
                Phone: { phone }
            </div>
            <div class="description">
                E-mail: { email }
            </div>
        </div>
        </>
    );
};