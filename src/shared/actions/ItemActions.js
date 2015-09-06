export const ADD_ITEM = 'ADD_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';

export function addItem(text) {
  return { type: types.ADD_ITEM, value: text };
}

export function completeItem(index) {
  return { type: types.COMPLETE_ITEM, id: index };
}
