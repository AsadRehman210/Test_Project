import { useSelector } from "react-redux";
import Leaderboard from "./components/Leaderboard";
import SearchBar from "./components/SearchBar";
import { RootState } from "./redux/store/store"


const App: React.FC = () => {
  const SearchedValue = useSelector((state: RootState) => state.userReducer.SearchedValue)
  const userData = useSelector((state: RootState) => state.userReducer.userData)
  const valueMatch = useSelector((state: RootState) => state.userReducer.valueMatch)

  const shouldTransform = !SearchedValue || !valueMatch || userData.length === 0;

  return (
    <div className="App">
      <div className="App_container" style={shouldTransform ? { transform: "translateY(-50%)" } : {}}>
        <SearchBar />
        {(SearchedValue && userData.length > 0) && <Leaderboard />}
      </div>

    </div>
  );
};

export default App;
