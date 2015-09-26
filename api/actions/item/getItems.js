import Item from '../../models/item';

export default function getItems(req, params) {
  // let test = Item.find().exec();
  return new Promise((resolve, reject) => {
    resolve([{ id: 0, text: "Test", completed: false }]);
  });
}
