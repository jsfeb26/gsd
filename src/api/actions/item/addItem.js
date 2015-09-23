import Item from '../../models/item';
import getItems from './getItems';

export default function addItem(req, name) {
  return new Promise((resolve, reject) => {
    resolve(
      Item.create({ name : params[0] });
      return getItems();
    );
  });
}
