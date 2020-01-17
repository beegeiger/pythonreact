from flask import (Flask, render_template, redirect, request, flash,
                   session, jsonify)
from templates.__init__ import app
from templates.begin.views import hello_blueprint

import math
import time
import json
import random
import string
import datetime
import threading
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import (update, asc, desc)
from model import User, Contact, AlertSet, Alert, CheckIn, ReqCheck, connect_to_db, db
import requests
import logging
from flask_cors import CORS

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///besafe'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy()
db.app = app

db.init_app(app)

# Required to use Flask sessions and the debug toolbar
app.secret_key = "ABC"
CORS(app)




################################################################

@app.route('/callback')
def callback_handling():
    # Handles response from token endpoint
    auth0.authorize_access_token()
    resp = auth0.get('userinfo')
    userinfo = resp.json()
    # Store the user information in flask session.
    session['jwt_payload'] = userinfo
    session['profile'] = {
        'user_id': userinfo['sub'],
        'name': userinfo['name'],
        'picture': userinfo['picture'],
        'email': userinfo['email']
    }

    #Sets the 'current_user' value in the session to the user's e-mail
    session['current_user'] = userinfo['email']

    #User Table is Queried to see if User already exists in dB
    user = User.query.filter_by(email=userinfo['email']).all()
    
    #If the user isn't in the dBase, they are added
    if user == []:
        new_user = User(name=userinfo['name'], email=userinfo['email'], username=userinfo['nickname'], fname=userinfo['given_name'], lname=userinfo['family_name'], created_at=datetime.datetime.now())
        db.session.add(new_user)
    
    #The dBase changes are committed
    db.session.commit()

    #Redirects to the User Profile
    return redirect('/')

@app.route('/login', methods=['POST'])
def login_handling():
    # Handles response from token endpoint
    data = request.form
    print('Login Data: ', data)
    print(request.form.to_dict())
    print(request.form.get('user'))
    print(request.form.get('user[]'))
    print(request.form.get('name'))
    print(request.form.get('name[]'))
    print(request)
    print(request.args)

    #Sets the 'current_user' value in the session to the user's e-mail
    # session['current_user'] = userinfo['email']

    # #User Table is Queried to see if User already exists in dB
    # user = User.query.filter_by(email=userinfo['email']).all()
    
    # #If the user isn't in the dBase, they are added
    # if user == []:
    #     new_user = User(name=userinfo['name'], email=userinfo['email'], username=userinfo['nickname'], fname=userinfo['given_name'], lname=userinfo['family_name'], created_at=datetime.datetime.now())
    #     db.session.add(new_user)
    
    # #The dBase changes are committed
    # db.session.commit()

    #Redirects to the User Profile
    return "Success"

@app.route("/contacts")
def user_contacts():
    """Renders the User's 'contacts' Page"""

    # user = User.query.filter_by(email=session['current_user']).one()
    # contacts = Contact.query.filter_by(user_id=user.user_id).order_by(asc(Contact.contact_id)).all()

    #Queries the current user and their contact info
    c1 = {'name': 'Bob', 'email': 'bob@gmail.com', 'phone': '555-1010', 'conID': 1}
    c2 = {'name': 'Susan', 'email': 'susan@gmail.com', 'phone': '555-2010', 'conID': 2}
    cs = [c1, c2]
    contacts = json.dumps(cs)

    return contacts

@app.route("/del_contact/<contact_id>")
def delete_contact(contact_id):
    """Deletes a user's contact from the dBase"""

    #Queries the contact in question, deletes it from the dBase, and commits
    contact = Contact.query.filter_by(contact_id=contact_id).one()
    db.session.delete(contact)
    db.session.commit()

    return "Contact Deleted"

@app.route("/edit_contact/<contact_id>", methods=["POST"])
def edit_contact(contact_id):
    """Edit's a contact's info"""

    #Creates variables from the form on the contacts page
    name = request.form['name']
    phone = request.form['phone']
    email = request.form['email']

    user = User.query.filter_by(email=userinfo['email']).all()

    if contact_id != 'new':
        ((db.session.query(Contact).filter_by(contact_id=contact_id)).update(
        {'name':name, 'email':email, 'phone':phone}))
    else:
        new_contact = Contact(user_id=user.user_id, name=name, email=email, phone=phone)
        db.session.add(new_contact)
    db.session.commit()

    contact = Contact.query.filter_by(name=name).one()

    return contact.contact_id

@app.route("/logout")
def logout():
    """Logs user out and deletes them from the session (Tested)"""

    # Clear session stored data
    session.clear

    # Redirect user to logout endpoint
    params = {'returnTo': url_for('go_home', _external=True), 'client_id': '78rUTjeVusqU3vYXyvNpOQiF8jEacf55'}
    return redirect(auth0.api_base_url + '/v2/logout?' + urlencode(params))

#################################################################
if __name__ == '__main__':
    app.config.from_object('configurations.DevelopmentConfig')
    app.run()