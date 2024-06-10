import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store/store"
import { setSortFilter } from "../redux/actions/userActions";


const Leaderboard = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.userReducer.userData)
  const SearchedValue = useSelector((state: RootState) => state.userReducer.SearchedValue);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortFilter(e.target.value));
  };


  return (
    <div className="leaderboard_data_show">
      {/* <div className="select_row"> */}
        <div className="select_col">
          <label>Sort by:</label>
          <select name="Filter" onChange={handleSortChange} >
            <option value="select">Select Filter</option>
            <option value="lowestRank">Lowest Rank</option>
            <option value="a-z">UserName(A-Z)</option>
            <option value="z-a">UserName(Z-A)</option>
          </select>
        </div>
      {/* </div> */}
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Rank</th>
            <th>No of Bananas</th>
          </tr>
        </thead>
        <tbody>
          {selected.map((user, index) => (
            <tr key={index} >
              <td className={user.name.includes(SearchedValue) ? 'highlight' : 'userStyling'} >{user.name}</td>
              <td>{user.rank + 1}</td>
              <td>{user.bananas}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Leaderboard
