import Home from "./Components/Home";
import CompletedTask from "./Components/CompletedTask";
import MyContextState from "./Context/MyContextState";
import PendingTask from './Components/PendingTask'


function App() {
  return (
    <div className="container w-75">

      <MyContextState>
        <Home />
        <PendingTask />
        <CompletedTask />
      </MyContextState>

    </div>
  );
}

export default App;
