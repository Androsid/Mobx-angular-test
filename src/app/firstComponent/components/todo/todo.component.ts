import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Todo, TodosStore } from '../../store/todos.store';

@Component({
  selector: 'app-todo',
  template: `
  <div *mobxAutorun="{ dontDetach: true }">  
    <input type="checkbox" (change)="complete.emit(todo)" [checked]="todo.completed">{{todo.title}}
    <button class="destroy" (click)="_todosStore.removeTodo(todo)">X</button>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() complete = new EventEmitter();

  constructor( public _todosStore: TodosStore ) {
  }
}
