import axios from "axios";

export interface ITodo {
  id: number;
  name: string;
}

axios.defaults.baseURL = "http://localhost:3001";

export async function getTodos() {
  const res = await axios.get<ITodo[]>("/todos");
  return res.data;
}

export async function createTodo(name: string) {
  const res = await axios.post<ITodo>("/todos", {
    name,
  });
  return res.data
}
