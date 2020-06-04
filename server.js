const express = require('express');
const bodyParser = require('body-parser');

const registerRoute = require('./routes/RegisterRouter');
const authenticateRoute = require('./routes/AuthenticateRouter');
const paymentRoute = require('./routes/PaymentRouter');
var path = require('path');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
const hostname = "localhost";
const port = 8080;

app.get('/', (req, res) => {
    res.render('login');
})

app.get('/paymentPage',(req,res)=>{
    res.render('paymentPage');
})
app.use('/payment', paymentRoute);
app.post('/api/register', registerRoute.register);
app.use('/authenticate',authenticateRoute);

app.listen(port, () => console.log(`Server running at http://${hostname}:${port}/`));