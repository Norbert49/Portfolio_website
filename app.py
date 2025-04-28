from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('sections/about.html')

@app.route('/skills')
def skills():
    return render_template('sections/skills.html')

@app.route('/education')
def education():
    return render_template('sections/education.html')

@app.route('/experience')
def experience():
    return render_template('sections/experience.html')

@app.route('/contact')
def contact():
    return render_template('sections/contact.html')

if __name__ == '__main__':
    app.run(debug=True)