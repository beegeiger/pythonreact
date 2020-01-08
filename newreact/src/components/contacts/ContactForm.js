import React from 'react';

export const ContactForm = props => {
    const name = props.name
    const email = props.email
    const phone = props.phone
    let vis = props.vis

    function handleChange(key) {
        return function (e) {
          var state = {};
          state[key] = e.target.value;
          this.setState(state);
        }.bind(this);
    }

    function handleSave() {
        
        setVisState('display');
    }

    return (
        <div class={ vis }>
        <div class="content">
            <form class="ui form">
                <div class="header">
                    <div class="field">
                        <input type="text" name="name" placeholder="Contact Name" value={ name } onChange={this.handleChange('name')} />
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="email" placeholder="Contact E-mail" value={ email } onChange={this.handleChange('email')} />
                    </div>
                </div>
                <div class="description">
                    <div class="field">
                        <input type="text" name="phone" placeholder="Contact Phone #" value={ phone } onChange={this.handleChange('phone')} />
                    </div>
                </div>
                <div class="ui bottom attached button" onclick={handleSave()}>
                        <i class="setting basic icon"></i>
                        Save Contact
                    </div>
                    <div class="ui bottom attached button">
                        <i class="cancel circle basic icon"></i>
                        Delete Contact
                    </div> 
            </form>
            <pre>{JSON.stringify(this.getFormData(), null, 4)}</pre>
        </div>
 
        </div>
    );
};