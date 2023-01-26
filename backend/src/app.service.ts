import { Injectable } from '@nestjs/common';

export interface ITodo {
  id: number;
  name: string;
}

const todos: ITodo[] = [];

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createTodo(name: string) {
    if (todos.length == 0) {
      todos.push({
        id: 1,
        name,
      });
    }

    const newId = todos[todos.length - 1].id + 1;
    const todo: ITodo = {
      id: newId,
      name,
    };
    todos.push(todo);
    return todo;
  }

  getAllTodo() {
    return todos;
  }
}
