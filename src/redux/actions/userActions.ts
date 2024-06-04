import { UserSearchValueFunction, ValueMatchedFunction, UserModification, UserActionTypes } from "../types/types";

export const userSearchValue: UserSearchValueFunction = (value: string) => {
    return {
        type: "User_Search_Value",
        payload: value
    }
}

export const valueMatched: ValueMatchedFunction = (value: boolean) => {
    return {
        type: "Value_Matched",
        payload: value
    }
}

export interface RawUser {
    bananas: number;
    lastDayPlayed: string;
    longestStreak: number;
    name: string;
    stars: number;
    subscribed: boolean;
    uid: string;
}

export const fetchUserData = () => {
    return async (dispatch: (action: UserActionTypes) => void) => {
        try {
            const response = await fetch('/data/UserData.json');
            const data: Record<string, RawUser> = await response.json();

            const modifiedData: UserModification[] = Object.values(data).map((user, index) => ({
                name: user.name.toLowerCase(),
                bananas: user.bananas,
                rank: index
            }));

            // Sort the array 
            modifiedData.sort((a, b) => {
                if (b.bananas === a.bananas) {
                    return a.name.localeCompare(b.name); // Alphabetical order
                }
                return b.bananas - a.bananas; // Sort by bananas count
            });

            dispatch({ type: "FETCH_USER_DATA", payload: modifiedData });

        } catch (error) {
            console.log('Error fetching user data:', error);
        }
    };
};
