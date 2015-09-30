import Item from '../../models/item';
import getItems from './getItems';

export default function addItem(req) {
  const newText = req.body['text'].trim();

  return Item.create({
    text: newText,
    completed: false
  }).then(() => { return getItems() });
}
