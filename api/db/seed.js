import Item from '../models/item';

export function run(callback, errback) {
  Item.create(
    {
      text: 'Test Item 1',
      completed: false
    },
    {
      text: 'Test Item 2',
      completed: true
    }
  );
}
