import Item from '../../models/item';
import getItems from './getItems';

export default function saveItem(req) {
  const newText = req.body['text'];
  const newCompleted = req.body['completed'];

  // return Item.findOneAndUpdate(
  //   { _id: req},
  //   { text: newText, completed: newCompleted }
  // ).then(() => { return getItems() });
}
