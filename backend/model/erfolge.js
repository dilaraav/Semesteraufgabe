const sql = require("./db.js");

// constructor
const Erfolg = function(erfolg) {
    this.datum = erfolg.datum;
    this.gewicht = erfolg.gewicht;
    this.arm = erfolg.arm;
    this.brust = erfolg.brust;
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

        console.log("members: ", res);
        result(null, res);
    });
};

Erfolg.updateById = (id, member, result) => {
    sql.query(
        "UPDATE members SET firstname = ?, lastname = ?, email = ? WHERE id = ?",
        [member.firstname, member.lastname, member.email, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Customer with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated member: ", { id: id, ...member });
            result(null, { id: id, ...member });
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
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted erfolg with datum: ", datum);
        result(null, res);
    });
};

Member.removeAll = result => {
    sql.query("DELETE FROM Erfolge", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} members`);
        result(null, res);
    });
};

module.exports = Erfolg;