import React from 'react';

export const Contact = props => {
    const name = this.props.name
    const email = this.props.email
    const phone = this.props.phone
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
                <i class="setting basic icon"></i>
                Edit Contact
                </div>
                <div class="ui bottom attached button">
                <i class="cancel circle basic icon"></i>
                Delete Contact
                </div>
            </div>
        </div>
    );
};