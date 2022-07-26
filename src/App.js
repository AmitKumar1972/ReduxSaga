import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/user/store";
import HooksContainer from "./components/HooksContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksContainer />
      </div>
    </Provider>
  );
}

export default App;
