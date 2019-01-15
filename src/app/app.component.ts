import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from './secondComponent/store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'testMobx';
  constructor(public store: Store) {}
}
