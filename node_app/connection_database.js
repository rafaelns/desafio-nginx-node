var mysql = require('mysql')

//cria a conexão passando um objeto com os dados
var connection = mysql.createConnection({
    host: 'mysqldb',
    user: 'root',
    port: '3306',
    password: 'masterkey',
    database: 'mydb'

});

//faz a conexão e cria a tabela people
connection.connect(function(err) {
    if(err) {
        console.log(err.message);
    } else {
        console.log("Aplicação conectada!");
        var sql = "CREATE TABLE IF NOT EXISTS people (id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
    }
});


module.exports = connection;