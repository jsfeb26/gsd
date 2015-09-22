import Item from '../models/item';

export default function addItem(req, name) {
  return new Promise((resolve, reject) => {
    resolve(
      Item.create({ name : params[0] });
      return getList();
    );
  });
}
