import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './firstComponent/components/todos/todos.component';
import { TodoComponent } from './firstComponent/components/todo/todo.component';
import { TodosPageComponent } from './firstComponent/components/todos-page/todos-page.component';
import { TodosStore } from './firstComponent/store/todos.store';

import { MobxAngularModule } from 'mobx-angular';

import { MatButtonModule, MatTableModule, MatCardModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { InputComponent } from './secondComponent/components/input/input.component';
import { SpendingsComponent } from './secondComponent/components/spendings/spendings.component';
import { TotalComponent } from './secondComponent/components/total/total.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from './secondComponent/store/app.store';
import { CountComponent } from './thirdComponent/components/count/count.component';
import { FooterComponent } from './thirdComponent/components/footer/footer.component';
import { SectionComponent } from './thirdComponent/components/section/section.component';
import { ThirdComponent } from './thirdComponent/thirdComponent.component';
import { Todos } from './thirdComponent/stores/todos.store';
import { HttpClientModule } from '@angular/common/http';
import { DbService } from './service/db.service';

  const COMPONENTS = [TodosComponent, TodoComponent, ThirdComponent, TodosPageComponent,
     InputComponent, SpendingsComponent, TotalComponent, CountComponent, FooterComponent,
      SectionComponent];
  const MATERIAL_MODULES = [MatButtonModule, MatTableModule, MatCardModule, MatSelectModule, 
    MatFormFieldModule, MatInputModule, MatCheckboxModule, BrowserAnimationsModule];
  
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MobxAngularModule,
    ...MATERIAL_MODULES,
    FormsModule, ReactiveFormsModule
  ],
  providers: [TodosStore, Store, Todos, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
