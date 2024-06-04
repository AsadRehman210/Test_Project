import { userSearchValue, valueMatched } from './userActions';

describe('userSearchValue', () => {
  it('should create an action to search value', () => {
    const action = userSearchValue('searchValue');
    expect(action).toEqual({
      type: 'User_Search_Value',
      payload: 'searchValue',
    });
  });
});

describe('valueMatched', () => {
  it('should create an action for value matched', () => {
    const action = valueMatched(true);
    expect(action).toEqual({
      type: 'Value_Matched',
      payload: true,
    });
  });
});
