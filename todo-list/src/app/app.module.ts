import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalMessageComponent } from './modal-message/modal-message.component';
import { MySvgEmptyComponent } from './components/my-svg-empty/my-svg-empty.component';

const routes:Routes = [
  { path: "", component: TasksComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ModalMessageComponent,
    MySvgEmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
