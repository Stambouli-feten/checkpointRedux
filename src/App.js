import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Image from "./todo-list.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  addTodo,
  saveTodo,
  updateTodo,
} from "./actions/todosActions";
function App() {
  const todos = useSelector((state) => state.todosReducer.todos);
  const save = useSelector((state) => state.todosReducer.save);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  useEffect(() => {
    if (save) setInput(save.title);
  }, [save]);
  return (
    <div className="App container">
      <header className="App-header">
        <img className="image" src={Image} alt="img" />

        <input
          className="inputSecttion"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your Todo Item "
        />
        <button
          className="addbutton"
          onClick={() => {
            if (save) dispatch(updateTodo(input));
            else
              dispatch(
                addTodo({
                  title: input,
                  id: uuidv4(),
                })
              );
            setInput("");
          }}
        >
          {save ? "update" : "add"}
        </button>
        {todos.map((el) => (
          <div className="Items">
            <div className="title">
              <h4>{el.title}</h4>
            </div>
            <div className="button">
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => dispatch(deleteTodo(el.id))}
              >
                delete
              </button>

              <button
                style={{ backgroundColor: "rgb(71, 114, 231)" }}
                onClick={() => dispatch(saveTodo(el))}
              >
                edit
              </button>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
