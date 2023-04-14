import "./App.css";
import LoginPage from "./LoginPage";
import Header from "./components/Header";
import Student from "./components/Student";
import Movies from "./components/Movies";
import MoviesData from "./movie.json";
import React, { useState } from "react";

//Components
import OnChangeTextClkBtn from "./components/OnChangeTextClkBtn";

function App() {
  // return (
  //   <div className="App">
  //    <Header/>
  //    <div className='main'>
  //     {
  //       MoviesData.map((element, index) =>{
  //         return(
  //           <Movies
  //           key = {index}
  //           // props
  //           title = {element.Title}
  //           year = {element.Year}
  //           img = {element.Poster}
  //           />
  //         )
  //       })
  //     }

  //   </div>
  //   </div>
  // );

  const [num, setNum] = useState(1);
  const incr = (n) => {
    setNum(num + n);
  };

  const decr = (n) => {
    setNum(num - n);
  };

  return (
    <div className="App">
      {/* <Header /> */}

      {/* <h1 className="heading">{num}</h1>
      <div className="main">
        <button className="btn" onClick={() => incr(2)}>
          {" "}
          increment
        </button>
        <button className="btn" onClick={() => decr(1)}>
          {" "}
          decrement
        </button>
      </div> */}

      <OnChangeTextClkBtn/>
    </div>
  );
}

export default App;
