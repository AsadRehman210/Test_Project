export type User= {
    name: string ;
    bananas: number;
    rank: number;
}

export type InitialState= {
    userData: User[];
    SearchedValue: string;
    valueMatch: boolean;
    sortFilter: string;
}

export type UserSearchValueAction= {
    type: "User_Search_Value";
    payload: string;
}

export type FetchUserDataAction ={
    type: "FETCH_USER_DATA";
    payload: User[];
}

export type ValueMatchedAction= {
    type: "Value_Matched";
    payload: boolean;
}
export type SetSortFilterAction= {
    type: "SET_SORT_FILTER";
    payload: string
}

export type Action = UserSearchValueAction | FetchUserDataAction | ValueMatchedAction | SetSortFilterAction;

export interface UserSearchValueFunction {
    (value: string): UserSearchValueAction;
}

export interface ValueMatchedFunction {
    (value: boolean): ValueMatchedAction;
}

export interface UserModification {
    name: string;
    bananas: number;
    rank: number;
}
export interface SetSortFilterFunction {
    (value: string): SetSortFilterAction
}

export type UserActionTypes = UserSearchValueAction | FetchUserDataAction | ValueMatchedAction | SetSortFilterAction ;
