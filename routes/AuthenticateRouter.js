var connection = require('./../config');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'pug');
app.set('views', 'views');
var router = express.Router();
// var sess;
router.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM PatientTbl WHERE PatientEmail = ?', [email], function (error, results, fields) {
        if (error) {
            res.json({
                status: false,
                message: 'there are some error with query'
            })
        } else {
            if (results.length > 0) {
                if (password == results[0].PatientPass) {
                    var op = {
                        "status": true,
                        "pid": results[0].PatientId,
                        "message": "Authenticated Successfully"
                    };
                    // res.json({
                    //     "status": true,
                    //     "pid": results[0].PatientId,
                    //     "message": "Authenticated Successfully"
                    // });
                    res.render('homePage', { obj: op });
                } else {
                    res.json({
                        status: false,
                        message: "Email and password does not match"
                    });
                }

            }
            else {
                res.json({
                    status: false,
                    message: "Email does not exits"
                });
            }
        }
    });
})

module.exports = router;