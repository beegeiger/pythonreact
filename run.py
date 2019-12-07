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

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///besafe'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy()
db.app = app

db.init_app(app)

# Required to use Flask sessions and the debug toolbar
app.secret_key = "ABC"

# Causes error messages for undefined variables in jinja
app.jinja_env.undefined = StrictUndefined







#################################################################
if __name__ == '__main__':
    app.config.from_object('configurations.DevelopmentConfig')
    app.run()