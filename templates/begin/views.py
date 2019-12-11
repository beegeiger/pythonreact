from flask import render_template, Blueprint, Flask
from authlib.integrations.flask_client import OAuth
from six.moves.urllib.parse import urlencode
from secrets import oauth_client_secret, oauth_client_id, google_maps_key

#####################################################3
app = Flask(__name__,
    static_folder = '../public',
    template_folder="../static")

hello_blueprint = Blueprint('hello',__name__)

#####################################################@

oauth = OAuth(app)

# def slack_compliance_fix(session):
#     def _fix(resp):
#         token = resp.json()
#         # slack returns no token_type
#         token['token_type'] = 'Bearer'
#         resp._content = to_unicode(json.dumps(token)).encode('utf-8')
#         return resp
#     session.register_compliance_hook('access_token_response', _fix)

auth0 = oauth.register(
    'auth0',
    client_id=oauth_client_id,
    client_secret=oauth_client_secret,
    api_base_url='https://dev-54k5g1jc.auth0.com',
    access_token_url='https://dev-54k5g1jc.auth0.com/oauth/token',
    authorize_url='https://dev-54k5g1jc.auth0.com/authorize',
    # compliance_fix=slack_compliance_fix,
    # client_kwargs={
    #     'scope': 'openid profile email',
    # }
)
################################################################

def requires_auth(f):
    """Creats Decorator from AuthO to only allow logged-in users access to 
    certain paths/routes within the application"""
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'profile' not in session:
            # Redirect to Login page here
            return redirect('/')
        return f(*args, **kwargs)
    return decorated

#################################################################

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
