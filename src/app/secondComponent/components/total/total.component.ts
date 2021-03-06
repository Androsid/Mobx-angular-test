import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '../../store/app.store';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalComponent {
  constructor(public store: Store) {}
}
