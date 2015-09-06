import { ADD_ITEM, COMPLETE_ITEM } from '../actions/ItemActions.js';

export default function items(state=[], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [...state, {
        text: action.value,
        completed: false
      }];
    case COMPLETE_ITEM:
      return [
        ...state.slice(0, action.id),
        Object.assign({}, state[action.id], {
          completed: true
        }),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
}
