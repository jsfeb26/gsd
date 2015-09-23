import Item from '../models/item';
import mongoose from 'mongoose';

export function run(callback, errback) {
  Item.create(
    {name: 'Broad beans'},
    {name: 'Tomatoes'},
    {name: 'Peppers'},
    function(err, items) {
      if (err) {
        errback(err);
        return;
      }

      callback(items);
    }
  );
};

if (require.main === module) {
  require('./connect');

  exports.run(function() {
    mongoose.disconnect();
  }, function(err) {
      console.error(err);
  });
}
