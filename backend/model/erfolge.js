const sql = require("./db.js");

// constructor
const Erfolg = function(erfolg) {
    this.id = erfolg.id
    this.datum = erfolg.datum;
    this.gewicht = erfolg.gewicht;
    this.arm = erfolg.arm;
    this.brust = erfolg.brust;
    this.taille = erfolg.taille;
    this.huefte = erfolg.huefte;
    this.oberschenkel = erfolg.oberschenkel;
};

Erfolg.create = (newErfolg, result) => {
    sql.query("INSERT INTO Erfolge SET ?", newErfolg, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created erfolg: ", { id: res.insertId, ...newErfolg });
        result(null, { id: res.insertId, ...newErfolg });
    });
};

Erfolg.findById = (erfolgId, result) => {
    sql.query(`SELECT * FROM Erfolge WHERE id = ${erfolgId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found erfolg: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

Erfolg.getAll = result => {
    sql.query("SELECT * FROM Erfolge", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Erfolge: ", res);
        result(null, res);
    });
};

Erfolg.updateById = (id, erfolge, result) => {
    sql.query(
        "UPDATE Erfolge SET datum = ?, gewicht = ?, arm = ?, brust = ?, huefte =?, oberschenkel =? WHERE id = ?",
        [erfolge.datum, erfolge.gewicht, erfolge.arm,erfolge.brust, erfolge.huefte, erfolge.oberschenkel, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows === 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated member: ", { id: id, ...erfolge });
            result(null, { id: id, ...erfolge });
        }
    );
};

Erfolg.remove = (id, result) => {
    sql.query("DELETE FROM Erfolge WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Member with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted member with id: ", id);
        result(null, res);
    });
};

Erfolg.removeAll = result => {
    sql.query("DELETE FROM Erfolge", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} erfolge`);
        result(null, res);
    });
};

module.exports = Erfolg;
