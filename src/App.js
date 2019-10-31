import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import NoRedux from "./components/NoRedux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterContainer />
        {/* <NoRedux /> */}
      </header>
    </div>
  );
}

export default App;
