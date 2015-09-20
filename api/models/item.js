import Mongoose from 'mongoose';

var ItemSchema = new Mongoose.Schema({
  name: { type: String, required: true }
});

export Item = Mongoose.model('Item', ItemSchema);
