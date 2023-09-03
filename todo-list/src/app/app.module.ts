import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  { path: "", component: TasksComponent },
  { path: "task-create", component: TaskCreateComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
