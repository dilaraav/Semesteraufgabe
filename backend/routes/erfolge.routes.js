var express = require('express');
var erfolg = require('../controller/erfolge.controller');
var router = express.Router();

//Alle Routes für Erfolge
router.get('/', erfolg.getAll);
router.get('/:id', erfolg.getById);
router.post('/',  erfolg.create);
router.put('/:id',  erfolg.update);
router.delete('/:id',  erfolg.delete);

module.exports = router;
