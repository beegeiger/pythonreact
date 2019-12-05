from templates.begin.views import app, hello_blueprint



# register the blueprints
app.register_blueprint(hello_blueprint)