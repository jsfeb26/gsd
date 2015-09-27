import Mongoose from 'mongoose';

var ItemSchema = new Mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false }
});

let Item = Mongoose.model('Item', ItemSchema);

export default Item;
