import Home from "./Components/Home";
import CompletedTask from "./Components/CompletedTask";
import MyContextState from "./Context/MyContextState";


function App() {
  return (
    <div className="container w-75">

      <MyContextState>
        <Home />
        <CompletedTask />
      </MyContextState>

    </div>
  );
}

export default App;
