from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/game')
def game():
    return render_template('game.html', row_num=5, col_num=5)


if __name__ == '__main__':
    app.run(host='0.0.0.0',
            debug=True,
            port=5000)
