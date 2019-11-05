import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
// import NoRedux from "./components/NoRedux";
import TodoContainer from "./containers/TodoContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterContainer />
        {/* <NoRedux /> */}
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
