var connection = require('./../config');

module.exports.register = function (req, res) {
    var today = new Date();
    var patients = {
        "PatientName": req.body.name,
        "PatientSurname": req.body.surname,
        "PatientEmail": req.body.email,
        "PatientPass": req.body.password,
        "CreatedAt": today
    }
    connection.query('INSERT INTO PatientTbl SET ?', patients, function (error, results, fields) {
        if (error) {
            var op = {
                status: false,
                message: 'there are some error with query',
            }
            res.render('index', { obj: op });
        } else {
            var op = {
                status: true,
                data: results,
                message: 'patient registered sucessfully'
            };
            res.render('login', { obj: op });
        }
    });
}