import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';  // Import AddTaskComponent
import { TaskListComponent } from './task-list/task-list.component';  // Import TaskListComponent
import { TaskItemComponent } from './task-item/task-item.component';  // Import TaskItemComponent
import { FormsModule } from '@angular/forms';  // Import FormsModule if using ngModel

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,   // Declare AddTaskComponent here
    TaskListComponent,  // Declare TaskListComponent here
    TaskItemComponent   // Declare TaskItemComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule         // Import FormsModule for ngModel binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
