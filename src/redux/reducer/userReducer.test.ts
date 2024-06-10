
import { userReducer } from './reducer';
import { InitialState, Action } from '../types/types';

const initialState: InitialState = {
    userData: [],
    SearchedValue: '',
    valueMatch: true,
    sortFilter:''
};

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(userReducer(undefined, {} as Action)).toEqual(initialState);
    });

    it('should handle User_Search_Value', () => {
        const action: Action = {
            type: 'User_Search_Value',
            payload: 'test',
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            SearchedValue: 'test',
        });
    });

    it('should handle FETCH_USER_DATA', () => {
        const action: Action = {
            type: 'FETCH_USER_DATA',
            payload: [
                { name: 'bob', bananas: 20, rank: 0 },
                { name: 'alice', bananas: 10, rank: 1 },
            ],
        };
        const state = {
            ...initialState,
            SearchedValue: 'bob',
        };

        const expectedState = {
            ...state,
            userData: [
                { name: 'bob', bananas: 20, rank: 0 },
                { name: 'alice', bananas: 10, rank: 1 },
            ],
        };

        expect(userReducer(state, action)).toEqual(expectedState);
    });

    it('should handle Value_Matched', () => {
        const action: Action = {
            type: 'Value_Matched',
            payload: false,
        };
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            valueMatch: false,
        });
    });
});
