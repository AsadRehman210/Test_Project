export interface User {
    name: string | null;
    bananas: number | null;
    rank: number;
}

export interface InitialState {
    userData: User[];
    SearchedValue: string | null;
    valueMatch: boolean;
}

export interface UserSearchValueAction {
    type: "User_Search_Value";
    payload: string;
}

export interface FetchUserDataAction {
    type: "FETCH_USER_DATA";
    payload: User[];
}

export interface ValueMatchedAction {
    type: "Value_Matched";
    payload: boolean;
}

export type Action = UserSearchValueAction | FetchUserDataAction | ValueMatchedAction;

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

export type UserActionTypes = UserSearchValueAction | FetchUserDataAction | ValueMatchedAction;
