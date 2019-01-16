import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodosStore } from '../store/todos.store';
import { fromMobx } from 'ngx-mobx';

@Component({
  selector: 'app-todos-page',
  template: `
   <app-todos [todos]="todos | async" (complete)="complete($event)"></app-todos>

   <input #input>
    <button (click)="addTodo(input.value)">Add todo</button>
  `
})
export class TodosPageComponent {
  todos : Observable<Todo[]>;

  constructor( private _todosStore: TodosStore ) {
  }

  ngOnInit() {
    this.todos = fromMobx(() => this._todosStore.filteredTodos);
  }
  addTodo(input) {
    this._todosStore.addTodo({ title: `${input}` });

  }

  complete( todo: Todo ) {
    this._todosStore.toggleComplete(todo);
  }
}

/* function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
} */