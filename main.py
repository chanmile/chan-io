from flask import Flask, render_template, jsonify
import spotipy
import spotipy.util as util

app = Flask(__name__, template_folder="build", static_folder="build/static")

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/req")
def hello():
    return jsonify(Name="ad", title="fdsajfd")

@app.route("/spot")
def auth():
    return jsonify(Name="ad", title="fdsajfd")

if __name__ == "__main__":
    app.run()
