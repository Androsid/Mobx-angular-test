import { Injectable } from '@angular/core';
import { action, observable, computed } from 'mobx';
import { DbService } from 'src/app/service/db.service';

export class Todo {
  completed = false;
  title: string;
  id?: number;

  constructor({ title, completed = false, id = null }) {
    this.completed = completed;
    this.title = title;
    this.id = id;
  }
}

@Injectable()
export class TodosStore {
  @observable todos;//: Todo[] = [new Todo({ title: 'Learn Mobx' })];

  constructor(private dbService: DbService) {
    this.todos = [];
    this.fetch();
  }

  @action addTodo({ title }: Partial<Todo>) {
    let newtodo = new Todo({ title });
    this.todos = [...this.todos, newtodo];
    this.dbService.addTodo(newtodo).subscribe();
    console.log("addTodo");

  }

  @action removeTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    this.dbService.deleteTodo(todo).subscribe();
    console.log("removeTodo" + todo.id);

  }

  @action fetch() {
    fetch('http://localhost:3001/todos/')
      .then(res => res.json())
      .then(json => this.putTodos(json))
      .catch(e => console.log(e));
  }

  @action putTodos(todos) {
    let userArray = [];
    todos.forEach(todo => {
      userArray.push(new Todo(todo));
    });
    this.todos = userArray;
    console.log(this.todos);
  }

  @computed get filteredTodos() {
    //this.todos = this.dbService.getTodos();
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