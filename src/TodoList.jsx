import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import AppBar from "./AppBar";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import "./App.css";
export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuid(), text: "Attend Lectures", isCompleted: false },
    { id: uuid(), text: "Get Grocries ", isCompleted: false },
    { id: uuid(), text: "Play BasketBall", isCompleted: false },
    { id: uuid(), text: "Home work", isCompleted: false },
  ]);
  const addTodo = (todo) => {
    setTodos((oldTodos) => {
      return [{ id: uuid(), text: todo, isCompleted: false }, ...oldTodos];
    });
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <>
      <AppBar />
      <h1
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          fontSize: "80px",
          margin: "0",
        }}
      >
        Todos
      </h1>
      <div className="todoList">
        <div className="box">
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 200,
              "& ul": { padding: 0 },
            }}
          >
            <li>
              <ul>
                {todos.map((e) => {
                  return <Todo deleteTodo={deleteTodo} key={e.id} data={e} />;
                })}
              </ul>
            </li>
          </List>
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
    </>
  );
}
