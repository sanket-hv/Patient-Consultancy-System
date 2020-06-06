var connection = require('./../config');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post('/add', (req, res) => {
    if (req.body.creditAmt == null) {
        var op = {
            'message': "Enter the Amount"
        }
        res.render("paymentPage", { obj: op })
    }
    var today = new Date();
    var payments = {
        "DebitAmt": 0,
        "CreditAmt": req.body.creditAmt,
        "Remarks": "Payment Added",
        "PatientId": req.body.ptid,
        "CreatedAt": today
    }
    connection.query('INSERT INTO PaymentTbl SET ?', payments, function (error, results, fields) {
        if (error) {
            var op = {
                status: false,
                data: payments,
                message: 'there are some error with query',
            }
            res.render('homePage', { obj: op });
        } else {
            var op = {
                status: true,
                data: results,
                message: 'payment made sucessfully'
            };
            res.render('homePage', { obj: op });
        }
    });
})

router.post('/history', (req, res) => {
    patientid = req.body.pid;
    connection.query('SELECT * FROM PaymentTbl WHERE PatientId = ?', [patientid], function (error, results, fields) {
        res.send(results);
    });
})

router.get('/service/video/:pid', (req, res) => {

    console.log("This is a video call service");
    var today = new Date();
    var payments = {
        "DebitAmt": 100,
        "CreditAmt": 0,
        "Remarks": "Charges for Video Call",
        "PatientId": req.params.pid,
        "CreatedAt": today
    }
    connection.query('INSERT INTO PaymentTbl SET ?', payments, function (error, results, fields) {
        if (error) {
            var op = {
                status: false,
                data: payments,
                message: 'there are some error with query',
            }
            res.render('homePage', { obj: op });
        } else {
            var op = {
                status: true,
                data: results,
                message: 'Service Charges Deducted'
            };
            res.render('homePage', { obj: op });
        }
    });
})

router.get('/service/call/:pid', (req, res) => {
    console.log("This is a video call service");
    var today = new Date();
    var payments = {
        "DebitAmt": 80,
        "CreditAmt": 0,
        "Remarks": "Charges for Call",
        "PatientId": req.params.pid,
        "CreatedAt": today
    }
    connection.query('INSERT INTO PaymentTbl SET ?', payments, function (error, results, fields) {
        if (error) {
            var op = {
                status: false,
                data: payments,
                message: 'there are some error with query',
            }
            res.render('homePage', { obj: op });
        } else {
            var op = {
                status: true,
                data: results,
                message: 'Service Charges Deducted'
            };
            res.render('homePage', { obj: op });
        }
    });
})

router.get('/service/chat/:pid', (req, res) => {
    console.log("This is a video chat service");
    var today = new Date();
    var payments = {
        "DebitAmt": 50,
        "CreditAmt": 0,
        "Remarks": "Charges for Chat",
        "PatientId": req.params.pid,
        "CreatedAt": today
    }
    connection.query('INSERT INTO PaymentTbl SET ?', payments, function (error, results, fields) {
        if (error) {
            var op = {
                status: false,
                data: payments,
                message: 'there are some error with query',
            }
            res.render('homePage', { obj: op });
        } else {
            var op = {
                status: true,
                data: results,
                message: 'Service Charges Deducted'
            };
            res.render('chatPage', { obj: op });
        }
    });
})

module.exports = router;






