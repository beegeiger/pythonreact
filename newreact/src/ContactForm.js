import React from 'react';

export const ContactForm = props => {
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
    );
};