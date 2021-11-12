import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Bin",
    last: "Pen",
  };
  const nameList = [
    { first: "Bin", last: "Pen" },
    { first: "Con", last: "Add" },
    { first: "Sep", last: "Xon" },
  ];
  return (
    <div className="App">
      <Greet isLoggedIn={true} messageCount={10} name="bono" />
      <Person name={personName} />
      <PersonList nameList={nameList}/>
    </div>
  );
}

export default App;
