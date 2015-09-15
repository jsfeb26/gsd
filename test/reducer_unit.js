import { expect } from 'chai';

import { ADD_ITEM, COMPLETE_ITEM } from '../src/shared/actions/ItemActions';
import itemReducer from '../src/shared/reducers/itemReducer';

describe('reducer', () => {
  describe('addItem', () => {
    it('Returns new correct state', () => {
      const initialState = [
        { text: 'Learn Redux', completed: false }
      ];
      const action = { type: ADD_ITEM, value: 'Learn Node' };
      const newState = itemReducer(initialState, action);
      
      expect(newState.length).to.equal(2);
      expect(newState[1].text).to.equal('Learn Node');
      expect(newState[1].completed).to.equal(false);
      expect(newState).to.not.equal(initialState);
    });
  });
});
