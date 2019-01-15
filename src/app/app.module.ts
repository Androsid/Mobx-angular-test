import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './firstComponent/todos/todos.component';
import { TodoComponent } from './firstComponent/todo/todo.component';
import { TodosPageComponent } from './firstComponent/todos-page/todos-page.component';
import { TodosStore } from './firstComponent/store/todos.store';
import { TodosFilterStore } from './firstComponent/store/todos-filter.store';

import { MobxAngularModule } from 'mobx-angular';

import { MatButtonModule, MatTableModule, MatCardModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { InputComponent } from './secondComponent/input/input.component';
import { SpendingsComponent } from './secondComponent/spendings/spendings.component';
import { TotalComponent } from './secondComponent/total/total.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from './secondComponent/store/app.store';

  const COMPONENTS = [TodosComponent,
    TodoComponent,
    TodosPageComponent, InputComponent, SpendingsComponent, TotalComponent];
  const MATERIAL_MODULES = [MatButtonModule, MatTableModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule,
    MatCheckboxModule, BrowserAnimationsModule];
  
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule,
    ...MATERIAL_MODULES,
    FormsModule, ReactiveFormsModule
  ],
  providers: [TodosStore, TodosFilterStore, Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
