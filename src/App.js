import AddCommas from "./addCommas";
import Madlib from "./Madlibs";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <AddCommas number={1234}></AddCommas>
      <AddCommas number={1000000}></AddCommas>
      <AddCommas number={9876543210}></AddCommas>
      <AddCommas number={6}></AddCommas>
      <AddCommas number={-10}></AddCommas>
      <AddCommas number={-5678}></AddCommas> */}
      <Madlib />
    </div>
  );
}

export default App;
