import {
  ADD_ITEM,
  ADD_ITEM_FAIL,
  SAVE_ITEM,
  SAVE_ITEM_FAIL,
  REMOVE_ITEM,
  REMOVE_ITEM_FAIL,
  RECEIVE_ITEMS,
  REQUEST_ITEMS,
  REQUEST_FAIL
} from '../actions/ItemActions.js';

export default function items(state=[], action = {}) {
  switch(action.type) {
    case ADD_ITEM:
      return state;
    case SAVE_ITEM:
      return state;
    case REMOVE_ITEM:
      return state;
    case REQUEST_ITEMS:
      return state;
    case RECEIVE_ITEMS:
      if (!action || !action.result || !action.result) {
        return state;
      }

      return action.result;
    case REQUEST_FAIL:
      return state;
    default:
      return state;
  }
}
