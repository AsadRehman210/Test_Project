import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { userSearchValue, fetchUserData, valueMatched } from "../redux/actions/userActions"
import { AppDispatch } from "../redux/store/store"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { toast } from "react-toastify"

const SearchBar = () => {
    const [searchUser, setSearchUser] = useState('')
    const dispatch: AppDispatch = useDispatch()
    const valueMatch = useSelector((state: RootState) => state.userReducer.valueMatch);

    const handleSearch = () => {
        if (!searchUser) {
            toast.warn("Please enter the username.")
            
            return;
        }

        dispatch(userSearchValue(searchUser))
        dispatch(fetchUserData())
        setSearchUser('');


    }

    useEffect(() => {
        if (!valueMatch) {
            toast.error("This user name does not exist! Please specify an existing user name!");
            dispatch(valueMatched(true));
        }
    }, [valueMatch, dispatch]);

    return (
        <div className="search_bar">
            <div className="row">
                <div className="col-12">
                    <TextField
                        placeholder="userName..."
                        className="me-5 "
                        value={searchUser}
                        onChange={(e) => setSearchUser(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon className="icon_size text-primary" />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <button onClick={handleSearch} >Search</button>
                </div>

            </div>
        </div>
    )
}

export default SearchBar
