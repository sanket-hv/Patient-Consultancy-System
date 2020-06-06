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
            var op = {
                status: false,
                message: 'there are some error with query'
            }
            res.render('login', { obj: op });
        } else {
            if (results.length > 0) {
                if (password == results[0].PatientPass) {
                    var op = {
                        "status": true,
                        "pid": results[0].PatientId,
                        "message": "Authenticated Successfully"
                    };
                    res.render('homePage', { obj: op });
                } else {
                    var op = {
                        status: false,
                        message: "Email and password does not match"
                    }
                    res.render('login', { obj: op });
                }

            }
            else {
                var op = {
                    status: false,
                    message: "Email does not exits"
                }
                res.render('login', { obj: op });
            }
        }
    });
})

module.exports = router;