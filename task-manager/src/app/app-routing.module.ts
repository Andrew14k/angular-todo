import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components here
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },    // Home route
  { path: 'new-task', component: TaskFormComponent },  // New task route
  { path: 'task/:id', component: TaskDetailComponent }, // Task detail route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
