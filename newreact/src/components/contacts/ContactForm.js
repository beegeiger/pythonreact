import React from 'react';

export const ContactForm = props => {
    const name = props.name
    const email = props.email
    const phone = props.phone
    let vis = props.vis
    return (
        <div class={ vis }>
        <div class="content">
            <form class="ui form">
                <div class="header">
                    <div class="field">
                        <input type="text" name="name" placeholder="Contact Name" value={ name } />
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="email" placeholder="Contact E-mail" value={ email } />
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="phone" placeholder="Contact Phone #" value={ phone } />
                    </div>
                </div>
            </form>
        </div>
 
        </div>
    );
};