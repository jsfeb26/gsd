import Item from '../../models/item';
import getItems from './getItems';

export default function saveItem(req) {
  const id = req.body['_id'];
  const newText = req.body['text'];
  const newCompleted = req.body['completed'];

  return Item.findById(id).exec().then((item) => {
    item.text = newText ? newText : item.text;
    item.completed = newCompleted === undefined ? item.completed : newCompleted;

    return item.save();
  }).then(() => { return getItems() });
}
