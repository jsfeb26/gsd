import Item from '../../models/item';

export default function getItems(req, params) {
  return Item.find().exec();
}
