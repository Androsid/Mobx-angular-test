import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../store/todos.store';

@Component({
  selector: 'app-todos',
  template: `
  <div *mobxAutorun="{ dontDetach: true }">  
    <ul>
      <li *ngFor="let todo of todos">
        <app-todo [todo]="todo" (complete)="complete.emit($event)"></app-todo> 
      </li>
    </ul>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent {
  @Input() todos: Todo[] = [];
  @Output() complete = new EventEmitter();


}