from flask import Flask, render_template
from datetime import date

app = Flask(__name__)

@app.route("/")
def home():
    return render_template(
        "index.html",
        nombre="Miranda",
        tu_nombre="Victor",
        fecha=date.today().strftime("%d/%m/%Y")
    )

if __name__ == "__main__":
    app.run(debug=True)