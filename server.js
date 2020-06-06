const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
const hostname = "localhost";
const port = 8080;

const registerRoute = require('./routes/RegisterRouter');
const authenticateRoute = require('./routes/AuthenticateRouter');
const paymentRoute = require('./routes/PaymentRouter');

//View Login Page
app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/homePage', (req, res) => {
    var op = {
        "pid": 0
    }
    res.render('homePage', { obj: op });
})

//View Registration Page
app.get('/registration', (req, res) => {
    res.render('registration');
})


app.get('/paymentPage', (req, res) => {
    res.render('login');
})

app.get('/servicePage', (req, res) => {
    res.render('login');
})

//View Payment Page
app.get('/paymentPage/:pid', (req, res) => {
    if (req.params.pid == null || req.params.pid == undefined) {
        res.render('login');
    }
    else {

        var op = {
            "pid": req.params.pid
        }
        res.render('paymentPage', { obj: op });
    }
})

//View Service paymentPage
app.get('/servicePage/:pid', (req, res) => {
    var op = {
        "pid": req.params.pid
    }
    res.render('servicePage', { obj: op });
})

//Logout
app.get('/logout', (req, res) => {
    res.render('logoutPage');
})

app.use('/payment', paymentRoute);
app.post('/api/register', registerRoute.register);
app.use('/authenticate', authenticateRoute);

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));