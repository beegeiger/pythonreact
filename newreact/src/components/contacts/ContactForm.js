import React from 'react';

export const ContactForm = props => {
    const name = props.name
    const email = props.email
    const phone = props.phone
    let vis = props.vis

    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
      }

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
                <div class="ui bottom attached button" onclick={() => setVisState('display')}>
                        <i class="setting basic icon"></i>
                        Save Contact
                    </div>
                    <div class="ui bottom attached button">
                        <i class="cancel circle basic icon"></i>
                        Delete Contact
                    </div> 
            </form>
        </div>
 
        </div>
    );
};