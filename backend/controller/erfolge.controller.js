const erfolgService = require("../model/erfolge.service");

exports.getAll = function (req, res, next) {
    erfolgService.getAll()
        .then(erfolg => res.json(erfolg))
        .catch(next => {
            return res.status(400).json({
                error: next
            })
        });
};

exports.getById = function (req, res, next) {
    erfolgService.getById(req.params.id)
        .then(erfolg => erfolg ? res.json(erfolg) : res.sendStatus(404))
        .catch(next => {
            return res.status(400).json({
                error: next
            })
        });
};

exports.update = function (req, res, next) {
    erfolgService.update(req.params.id, req.body)
        .then(erfolg => res.json(erfolg))
        .catch(next => {
            return res.status(400).json({
                error: next
            })
        });
};

exports.delete = function (req, res, next) {
    erfolgService.delete(req.params.id)
        .then(() => res.json({
            message: 'Clothing deleted successfully'
        }))
        .catch(next => {
            return res.status(400).json({
                error: next
            })
        });
};

exports.create = function (req, res, next) {
    erfolgService.create(req.body)
        .then(erfolg => res.json(erfolg))
        .catch(next => {
            console.log('caught error', next);
            return res.status(400).json({
                error: next
            })
        });
};
