import { Injectable } from '@angular/core';
import { action, observable, computed } from 'mobx';

export class Todo {
  completed = false;
  title: string;

  constructor({ title, completed = false }) {
    this.completed = completed;
    this.title = title;
  }
}

@Injectable()
export class TodosStore {

  @observable todos: Todo[] = [new Todo({ title: 'Learn Mobx' })];



  @action addTodo({ title }: Partial<Todo>) {
    this.todos = [...this.todos, new Todo({ title })]
  }

  @action removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  @computed get filteredTodos() {
    return this.todos;
  }

  @action toggleComplete(todo: Todo) {
    this.todos = this.todos.map(currentTodo => {
      if (currentTodo === todo) {
        return {
          ...currentTodo,
          completed: !currentTodo.completed
        }
      }
      return currentTodo;
    });
  }

}