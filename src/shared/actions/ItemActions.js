export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAIL = 'ADD_ITEM_FAIL';

export const COMPLETE_ITEM = 'COMPLETE_ITEM';

export function getItems() {
  return {
    types: [REQUEST_ITEMS, RECEIVE_ITEMS, REQUEST_FAIL],
    promise: (client) => client.get('/item/getItems')
  };
}

export function addItem(text) {
  return {
    types: [ADD_ITEM, RECEIVE_ITEMS, ADD_ITEM_FAIL],
    promise: (client) => client.post('/item/addItem', {
      data: { text: text }
    })
  };
}

export function completeItem(index) {
  return {
    type: COMPLETE_ITEM,
    id: index
  };
}
