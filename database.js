var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'simplon',
    database: 'first_db',
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM small_doggo", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        json = JSON.stringify(result);
        connection.end();
        console.log('JSON-result:', json);
        callback(null, json);
    });
});