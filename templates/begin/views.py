from flask import render_template, Blueprint, Flask

app = Flask(__name__,
    static_folder = '../public',
    template_folder="../static")

hello_blueprint = Blueprint('hello',__name__)

@hello_blueprint.route('/')

@hello_blueprint.route('/hello')
def index():
    return render_template("index.html")