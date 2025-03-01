import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';  // Add this import
import { TaskFormComponent } from './task-form/task-form.component';  // Add this import
import { TaskDetailComponent } from './task-detail/task-detail.component';  // Add this import
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,  // Declare TaskListComponent
    TaskFormComponent,  // Declare TaskFormComponent
    TaskDetailComponent  // Declare TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Import the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
