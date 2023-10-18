import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'


const routes:Routes = [
  { path: "", component: TasksComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterModule.forRoot(routes)
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
