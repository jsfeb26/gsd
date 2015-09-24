import Mongoose from 'mongoose';

var ItemSchema = new Mongoose.Schema({
  name: { type: String, required: true }
});

let Item = Mongoose.model('Item', ItemSchema);

export default Item;
