import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './firstComponent/todos/todos.component';
import { TodoComponent } from './firstComponent/todo/todo.component';
import { TodosPageComponent } from './firstComponent/todos-page/todos-page.component';
import { TodosStore } from './firstComponent/store/todos.store';

import { MobxAngularModule } from 'mobx-angular';

import { MatButtonModule, MatTableModule, MatCardModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { InputComponent } from './secondComponent/input/input.component';
import { SpendingsComponent } from './secondComponent/spendings/spendings.component';
import { TotalComponent } from './secondComponent/total/total.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from './secondComponent/store/app.store';
import { CountComponent } from './thirdComponent/count/count.component';
import { FooterComponent } from './thirdComponent/footer/footer.component';
import { SectionComponent } from './thirdComponent/section/section.component';
import { ThirdComponent } from './thirdComponent/thirdComponent.component';
import { Todos } from './thirdComponent/stores/todos.store';

  const COMPONENTS = [TodosComponent,
    TodoComponent,ThirdComponent,
    TodosPageComponent, InputComponent, SpendingsComponent, TotalComponent];
  const MATERIAL_MODULES = [MatButtonModule, MatTableModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule,
    MatCheckboxModule, BrowserAnimationsModule];
  
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    CountComponent,
    FooterComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MobxAngularModule,
    ...MATERIAL_MODULES,
    FormsModule, ReactiveFormsModule
  ],
  providers: [TodosStore, Store, Todos],
  bootstrap: [AppComponent]
})
export class AppModule { }
