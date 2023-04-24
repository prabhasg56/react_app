import "./App.css";

import React, { useState } from "react";

//Components
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
