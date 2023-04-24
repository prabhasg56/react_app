import React, { useState } from "react";
import "../App.css";

const TodoList = () => {
  
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  const TodoListDisp = (props) => {
    return (
      <li>
        {props.item}
        <span className="icon">
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
      </li>
    );
  };

  const TodoInput = (props) => {

    const [inputText, setInputText] = useState();

    const handleEnterPress = (e) => {
      if (e.keyCode === 13) {
        props.addList(inputText);
        setInputText("");
      }
    };

    return (
      <form>
        <input
          placeholder="Enter Todo"
          type="text"
          value={inputText}
          onChange={(e) => {
           setInputText(e.target.value);
          }}
          onKeyDown={handleEnterPress}
          style={{
            backgroundColor: "white",
            height: 40,
            width: 200,
            borderRadius: 10,
          }}
        ></input>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            height: 40,
            width: 40,
            borderRadius: 6,
            padding: 5,
            marginLeft: 5,
          }}
          onClick={() => {
            props.addList(inputText);
            setInputText("");
          }}
        >
          Add
        </button>
      </form>
    );
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <h1>To-do List </h1>
        <TodoInput addList={addList} />
        <h1>TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoListDisp
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
