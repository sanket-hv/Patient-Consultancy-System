var connection = require('./../config');
const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.use(session({
    secret: "patient-system",
    resave: true,
    saveUninitialized: true
}));
// const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => { console.log("Method called") });

router.post('/add', (req, res) => {
    // console.log("Registration Method Called");
    // sess = req.session;
    console.log("Add nethod");
    console.log(req.session);
    // console.log(req);
    var today = new Date();
    console.log("Payment")
    var payments = {
        "DebitAmt": 0,
        "CreditAmt": req.body.creditAmt,
        "Remarks": "Paymetns Added",
        "sess": req.session,
        "PatientId": 1, //1 is for testing only
        "CreatedAt": today
    }

    console.log(payments);
    connection.query('INSERT INTO PaymentTbl SET ?', payments, function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                data: payments,
                message: 'there are some error with query',
            })
        } else {
            res.json({
                status: true,
                val: payments,
                data: results,
                message: 'payment made sucessfully'
            })
        }
    });
})

module.exports = router;






