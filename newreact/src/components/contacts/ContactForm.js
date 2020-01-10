import React from 'react';

export const ContactForm = props => {
    const name = props.name
    const email = props.email
    const phone = props.phone
    let conId = 'new'
    let vis = props.vis

    if (typeof props.ConId !== 'undefined' || props.ConId.length > 0) {
        conId = props.conId
    }

    let conForm = {};

    function handleChange(key) {
        return function (e) {
          conForm[key] = e.target.value;
          this.setState(conForm);
          console.log(conFirm);
        }.bind(this);
    }

    function handleSave() {
        fetch(('http://127.0.0.1:5000/save_contact/' + conID), {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(conForm),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
            .catch((error) => {
            console.error('Error:', error);
        });
        setVisState('display');
    }

    function handleDelete() {
        fetch(('http://127.0.0.1:5000/delete_contact' + conID), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'conId': conId}),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
            .catch((error) => {
            console.error('Error:', error);
        });
        setVisState('delete');
    }
    

    return (
        <div class={ vis }>
        <div class="content">
            <form class="ui form">
                <div class="header">
                    <div class="field">
                        <input type="text" name="name" placeholder="Contact Name" value={ name } onChange={this.handleChange('name')} required/>
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
                    <div class="ui bottom attached button" onclick={handleDelete()}>
                        <i class="cancel circle basic icon"></i>
                        Delete Contact
                    </div> 
            </form>
            <pre>{JSON.stringify(this.getFormData(), null, 4)}</pre>
        </div>
 
        </div>
    );
};