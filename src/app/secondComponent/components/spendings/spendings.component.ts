import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/app.store';

@Component({
  selector: 'app-spendings',
  templateUrl: './spendings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpendingsComponent {
  constructor(public store: Store) {}
}
