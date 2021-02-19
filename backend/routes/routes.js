var express = require('express');

module.exports = function (app) {

    //User routes
    app.use('/users', require('../users/users.controller'));

    //erfolge routes
    app.use('/erfolge', require('./erfolge.routes'));
};
