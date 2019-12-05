from flask import Flask

import sys
sys.path.append('./templates/begin/')
from views import hello_blueprint



app = Flask(__name__,
    static_folder = './public',
    template_folder="./static")

# register the blueprints
app.register_blueprint(hello_blueprint)