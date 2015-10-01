import { expect } from 'chai';

import { ADD_ITEM, COMPLETE_ITEM } from '../src/redux/actions/ItemActions';
import itemReducer from '../src/redux/reducers/itemReducer';

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

    it('Initializes state correctly and Returns new correct state', () => {
      const action = { type: ADD_ITEM, value: 'Learn Node' };
      const newState = itemReducer(undefined, action);

      expect(newState.length).to.equal(1);
      expect(newState[0].text).to.equal('Learn Node');
      expect(newState[0].completed).to.equal(false);
    });
  });

  describe('completeItem', () => {
    it('Correctly sets item as complete', () => {
      const initialState = [
        { text: 'Learn Redux', completed: false }
      ];
      const action = { type: COMPLETE_ITEM, id: 0 };
      const newState = itemReducer(initialState, action);

      expect(newState.length).to.equal(1);
      expect(newState[0].completed).to.equal(true);
      expect(newState[0].text).to.equal('Learn Redux');
    });
  });

  describe('Invalid Action', () => {
    it('Returns initial state if action is not valid', () => {
      const initialState = [
        { text: 'Learn Redux', completed: false }
      ];
      const action = { type: "NOT_REAL_ACTION", id: 0 };
      const newState = itemReducer(initialState, action);

      expect(newState.length).to.equal(1);
      expect(newState).to.equal(initialState);
    });
  });
});
