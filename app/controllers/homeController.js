const Entity = require('../models/entity')

exports.homepage_get = function(req, res) {
    res.render('index');
};
