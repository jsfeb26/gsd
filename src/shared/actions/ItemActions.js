export const ADD_ITEM = 'ADD_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';

export function addItem(text) {
  return {
    type: ADD_ITEM,
    value: text
  };
}

export function completeItem(index) {
  return {
    type: COMPLETE_ITEM,
    id: index
  };
}

//========== async ==============================
export const SEND_NEW_ITEM = 'SEND_NEW_ITEM';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export function sendNewItem(text) {
  return {
    type: SEND_NEW_ITEM,
    value: text
  };
}

export function requestItems() {
  return {
    type: REQUEST_ITEMS
  };
}

export function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    itemList: items,
    receivedAt: Date.now()
  };
}

// ===== thunk action creators ==================
export function sendNewItemAPI(text) {
  return dispatch => {
    dispatch(sendNewItem(text));
    // send item to server
  }
}

export function requestItemsAPI() {
  return dispatch => {
    dispatch(requestItems());
    // return fetch(`http://localhost:5000/api`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receiveItems(json)));
  };
}
