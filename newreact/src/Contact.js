import React from 'react';

export const Contact = props => {
    const name = props.name
    const email = props.email
    const phone = props.phone
    return (
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <div class="header">Name: { name } </div>
                        <div class="description">
                            Phone: { phone }
                        </div>
                        <div class="description">
                            E-mail: { email }
                        </div>
                    </div>
                <div class="ui bottom attached button">
                <i class="add icon"></i>
                Edit Contact
                </div>
                <div class="ui bottom attached button">
                <i class="add icon"></i>
                Delete Contact
                </div>
            </div>
        </div>
    );
};