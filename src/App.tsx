import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      {/* <Greet isLoggedIn={true} messageCount={10} name="bono" />
      <Person name={personName} />
      <PersonList nameList={nameList}/> */}
      {/* <Status status = 'loading'/>
      <Heading>Place</Heading> */}
      <Oscar>
        <Heading>abcd</Heading>
      </Oscar>
    </div>
  );
}

export default App;
