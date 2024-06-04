import { useSelector } from "react-redux"
import { RootState } from "../redux/store/store"

const Leaderboard = () => {
  const selected = useSelector((state: RootState) => state.userReducer.userData)
  const SearchedValue = useSelector((state: RootState) => state.userReducer.SearchedValue);
 

  return (
    <div className="leaderboard_data_show">
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
              <td className={user.name === SearchedValue ? 'highlight' : 'userStyling'} >{user.name}</td>
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
