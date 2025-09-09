import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import AppBar from "./AppBar";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import "./App.css";

function getInitialData() {
  let data = localStorage.getItem("todos");
  data = JSON.parse(data);
  if (!data) return [];
  else return data;
}

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(
    function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  const addTodo = (todo) => {
    setTodos((oldTodos) => {
      return [{ id: uuid(), text: todo, isCompleted: false }, ...oldTodos];
    });
  };
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  const handleToggle = (id) => {
    setTodos((todos) => {
      return todos.map((e) => {
        if (e.id === id) {
          return { ...e, isCompleted: !e.isCompleted };
        } else {
          return e;
        }
      });
    });
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
                  return (
                    <Todo
                      handleToggle={() => handleToggle(e.id)}
                      deleteTodo={deleteTodo}
                      key={e.id}
                      data={e}
                    />
                  );
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
