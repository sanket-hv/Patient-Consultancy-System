const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('public',express.static(__dirname+'/public'));
const hostname = "localhost";
const port = 8080;

const registerRoute = require('./routes/RegisterRouter');
const authenticateRoute = require('./routes/AuthenticateRouter');
const paymentRoute = require('./routes/PaymentRouter');

//View Login Page
app.get('/', (req, res) => {
    res.render('login');
})

//View Registration Page
app.get('/registration', (req, res) => {
    res.render('registration');
})

//View Payment Page
app.get('/paymentPage', (req, res) => {
    res.render('paymentPage');
})

//View Payment History Page
app.get('/historyPage', (req, res) => {
    res.render('paymentHistory');
})

//View Service paymentPage
app.get('/servicePage/:pid', (req, res) => {
    console.log(req.params.pid)
    var op = {
        "pid" : req.params.pid
    }
    res.render('servicePage', { obj: op });
})

app.use('/payment', paymentRoute);
app.post('/api/register', registerRoute.register);
app.use('/authenticate', authenticateRoute);

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));