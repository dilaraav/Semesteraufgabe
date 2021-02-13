const Erfolg = require("../model/erfolge.js");

// Create and Save a new Member
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Member
    const erfolge = new Erfolg({
        id: req.body.id,
        datum: req.body.datum,
        gewicht: req.body.gewicht,
        arm: req.body.arm,
        brust: req.body.brust,
        taille: req.body.taille,
        huefte: req.body.huefte,
        oberschenkel: req.body.oberschenkel
    });

    // Save Customer in the database
    Erfolg.create(erfolge, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Member."
            });
        else res.send(data);
    });
};

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
    Erfolg.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Erfolge."
            });
        else res.send(data);
    });
};

// Find a single Member with a memberId
exports.findOne = (req, res) => {
    Erfolg.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Erfolg with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Erfolg with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

// Update a Member identified by the memberId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Erfolg.updateById(
        req.params.id,
        new Erfolg(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Erfolg with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Erfolge with id " + req.params.id
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Member with the specified memberId in the request
exports.delete = (req, res) => {
    Erfolg.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Erfolg with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Erfolg with id " + req.params.id
                });
            }
        } else res.send({ message: `Erfolg was deleted successfully!` });
    });
};

// Delete all Members from the database.
exports.deleteAll = (req, res) => {
    Erfolg.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all erfolge."
            });
        else res.send({ message: `All Erfolge were deleted successfully!` });
    });
};
