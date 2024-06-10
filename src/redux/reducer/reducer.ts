import { InitialState, Action } from "../types/types";

const initialState: InitialState = {
    userData: [],
    SearchedValue: "",
    valueMatch: true,
    sortFilter: "select"
};

export const userReducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case "User_Search_Value": {
            const lowerCase_searchedValue = action.payload.toLowerCase().trim();
            return {
                ...state,
                SearchedValue: lowerCase_searchedValue
            };
        }
        case "FETCH_USER_DATA": {
            let { SearchedValue } = state;
            let valueMatch = true;
            let filteredData = action.payload.map((user, index) => ({
                ...user,
                rank: index // Add the original index to each user
            }));

            const searchedUserIndex = filteredData.findIndex(user => user.name.includes(SearchedValue));

            if (searchedUserIndex === -1) {
                filteredData = [];
                SearchedValue = "";
                valueMatch = false;
            } else {
                // Logic for when the user is found
                const top10Users = filteredData.slice(0, 10);
                const isSearchedUserInTop10 = searchedUserIndex < 10;

                if (isSearchedUserInTop10) {
                    filteredData = top10Users;
                } else {
                    // If the searched user is not in the top 10, replace the last user with the searched user
                    const newTop10Users = [...top10Users];
                    newTop10Users[9] = filteredData[searchedUserIndex];
                    filteredData = newTop10Users;
                }
            }

            return {
                ...state,
                userData: filteredData,
                SearchedValue,
                valueMatch
            };
        }
        case "Value_Matched":
            return {
                ...state,
                valueMatch: action.payload
            };
        case "SET_SORT_FILTER": {
            const { userData } = state;
            const sortedData = [...userData];

            switch (action.payload) {
                case "lowestRank":
                    sortedData.sort((a, b) => {
                        if (a.rank === b.rank) {
                            return a.name.localeCompare(b.name); // Alphabetical order
                        }
                        return b.rank - a.rank; // Sort by rank
                    });
                    break;
                case "a-z":
                    sortedData.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "z-a":
                    sortedData.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case "select":
                    // No sorting applied, return original data
                    sortedData.sort((a, b) => a.rank - b.rank);
                    break;
                default:
                    break;
            }

            return {
                ...state,
                userData: sortedData,
                sortFilter: action.payload
            };
        }
        default:
            return state;
    }
};
