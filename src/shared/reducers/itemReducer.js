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

const initialState = {
  items: [],
  loaded: false,
  loading: false,
  editing: {},
  saveError: {}
};

export default function Item(state=initialState, action = {}) {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        loading: true
      }
    case SAVE_ITEM:
      return {
        ...state,
        loading: true
      }
    case REMOVE_ITEM:
      return {
        ...state,
        loading: true
      }
    case REQUEST_ITEMS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_ITEMS:
      if (!action || !action.result || !action.result) {
        return {
          ...state,
          loading: false
        }
      }

      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.result
      }
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}
