import React, { useCallback, useEffect, useState } from "react";

import styles from "@/styles/Home.module.css";
import { createTodo, getTodos, ITodo } from "@/services/todo";
type Props = {};

const Todo = (props: Props) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [addNewTodo, setAddNewTodo] = useState("")

  const fetchTodots = useCallback(async () => {
    const td = await getTodos();
    setTodos(td);
  }, []);

  useEffect(() => {
    fetchTodots();
  }, [fetchTodots]);

  const createNewTodo = useCallback(async () => {
    const res = await createTodo(addNewTodo)
    setAddNewTodo("")
    fetchTodots()
  }, [addNewTodo, fetchTodots])

  return (
    <main className={styles.main}>
      <div>
        <h1>My todo list</h1>
        <ol>
          {todos.map((td) => (
            <li key={td.id}>{td.name}</li>
          ))}
        </ol>

        <div>
          <input name="new-todo" value={addNewTodo} onChange={(e) => setAddNewTodo(e.target.value) }/ > 
          <button onClick={createNewTodo}>Add New Todo</button>
        </div>
      </div>
    </main>
  );
};

export default Todo;
