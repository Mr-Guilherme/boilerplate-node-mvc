const Entity = require('../models/entity')

exports.homepage_get = function(req, res) {
    const User = new Entity('user');
    res.render('index');
};
