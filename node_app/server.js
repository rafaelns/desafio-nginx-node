const connection = require('./connection_database');
const express = require('express');
const app = express();
const port = 8081;


app.get('/', (req, res) => {
    //Insere um registro no banco
    var sqlInsert = "INSERT INTO people(name) values('Person');";
    connection.query(sqlInsert, function (err) {
        if (err) {
            console.log(err.message);
        } else {
            console.log("Registro gravado com sucesso! ");
        }
    });

    // Recupera todos os registros do banco
    var sqlSelect = "SELECT * FROM people;";
    connection.query(sqlSelect, function (err, result) {
        if (err) {
            console.log(err.message);

        } else {
            var message = "<h1>Full Cycle Rocks!</h1> \n";

            var data = "<ul>";
            result.forEach(e => {
                data += `<li>${e.name}</li>`
            });
            data += "</ul>";
            return res.status(200).send(`
                    ${message}
                    ${data}
                `);
        }
    });
});


// escutando as requisições
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});