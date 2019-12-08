from flask import render_template, Blueprint, Flask


#####################################################3
app = Flask(__name__,
    static_folder = '../public',
    template_folder="../static")

hello_blueprint = Blueprint('hello',__name__)

#####################################################@

oauth = OAuth(app)

auth0 = oauth.register(
    'auth0',
    client_id=oauth_client_id,
    client_secret=oauth_client_secret,
    api_base_url='https://dev-54k5g1jc.auth0.com',
    access_token_url='https://dev-54k5g1jc.auth0.com/oauth/token',
    authorize_url='https://dev-54k5g1jc.auth0.com/authorize',
    client_kwargs={
        'scope': 'openid profile email',
    },
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
