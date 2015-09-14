import { expect } from 'chai';
import { ADD_ITEM, COMPLETE_ITEM } from '../src/shared/actions/ItemActions'
import { addItem, completeItem } from '../src/shared/actions/ItemActions'

describe('action creators', () => {
  describe('addItem', () => {
    it('Creates correct addItem action', () => {
      const newItem = "Learn Redux";
      const action = addItem(newItem);

      expect(action.type).to.equal(ADD_ITEM);
      expect(action.value).to.equal(newItem);
    });
  });

  describe('completeItem', () => {
    it('Creates correct completeItem action', () => {
      const itemIndex = 1;
      const action = completeItem(itemIndex);

      expect(action.type).to.equal(COMPLETE_ITEM);
      expect(action.id).to.equal(itemIndex);
    });
  });
});
