from flask import render_template, Blueprint, Flask
from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode
# from secrets import oauth_client_secret, oauth_client_id, google_maps_key

#####################################################3
app = Flask(__name__,
    static_folder = '../public',
    template_folder="../static")

hello_blueprint = Blueprint('hello',__name__)



@hello_blueprint.route('/')

@hello_blueprint.route('/hello')
def index():
    return render_template("index.html")

@hello_blueprint.route("/login", methods=["GET"])
def log_in():
    """Render's the log-in page if user not in session,
     otherwise redirects to the homepage (Tested)"""
    print('login visited')

    uri = "https://besafe.ngrok.io/callback"
    print(type(uri))
    return auth0.authorize_redirect(redirect_uri=uri, audience='https://dev-54k5g1jc.auth0.com/api/v2/')
