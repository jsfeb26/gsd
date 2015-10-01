export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_FAIL = 'ADD_ITEM_FAIL';

export const SAVE_ITEM = 'SAVE_ITEM';
export const SAVE_ITEM_FAIL = 'SAVE_ITEM_FAIL';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ITEM_FAIL = 'REMOVE_ITEM_FAIL';

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

export function editItem(item) {
  return {
    types: [SAVE_ITEM, RECEIVE_ITEMS, SAVE_ITEM_FAIL],
    promise: (client) => client.put('/item/saveItem', {
      data: item
    })
  };
}

export function completeItem(id) {
  return {
    types: [SAVE_ITEM, RECEIVE_ITEMS, SAVE_ITEM_FAIL],
    promise: (client) => client.put('/item/saveItem', {
      data: item
    })
  };
}

export function removeItem(id) {
  return {
    types: [REMOVE_ITEM, RECEIVE_ITEMS, REMOVE_ITEM_FAIL],
    promise: (client) => client.del('item/removeItem', {
      data: { _id: id }
    })
  };
}
