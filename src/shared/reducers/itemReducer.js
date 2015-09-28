import {
  ADD_ITEM,
  COMPLETE_ITEM,
  RECEIVE_ITEMS,
  REQUEST_ITEMS,
  REQUEST_FAIL
} from '../actions/ItemActions.js';

export default function items(state=[], action = {}) {
  switch(action.type) {
    case ADD_ITEM:
      return state;
    case COMPLETE_ITEM:
      return [
        ...state.slice(0, action.id),
        Object.assign({}, state[action.id], {
          completed: true
        }),
        ...state.slice(action.id + 1)
      ];
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
