import Item from '../../models/item';
import getItems from './getItems';

export default function removeItem(req) {
  const id = req.body['_id'];

  return Item.findOneAndRemove({ _id: id}).then(() => { return getItems() });
}
