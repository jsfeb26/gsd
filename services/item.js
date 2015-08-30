var Item = require('../models/item');

exports.save = function(name, callback, errback) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        
        callback(item);
    });
};

exports.list = function(callback, errback) {
    Item.find(function(err, items) {
        if (err) {
            errback(err);
            return;
        }
        
        callback(items);
    });
};

exports.remove = function(objId, callback, errback) {
    Item.findOneAndRemove({ _id: objId }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        
        callback(item);
    });
};

exports.edit = function(objId, name, callback, errback) {
    Item.findOneAndUpdate({ _id: objId }, { name: name }, function(err, item) {
        if (err) {
            errback(err);
            return;
        }
        
        callback(item);
    });
};