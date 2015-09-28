import Item from '../../models/item';
import getItems from './getItems';

export default function addItem(req) {
  return Item.create({
    text: req.body['text'],
    completed: false
  });
}
