import Item from '../models/item';

export function save(name, callback, errback) {
  Item.create({ name: name }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }

    callback(item);
  });
};

export function list(callback, errback) {
  Item.find(function(err, items) {
    if (err) {
      errback(err);
      return;
    }

    callback(items);
  });
};

export function remove(objId, callback, errback) {
  Item.findOneAndRemove({ _id: objId }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }

    callback(item);
  });
};

export function edit(objId, name, callback, errback) {
  Item.findOneAndUpdate({ _id: objId }, { name: name }, function(err, item) {
    if (err) {
      errback(err);
      return;
    }

    callback(item);
  });
};
