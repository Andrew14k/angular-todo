import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', dueDate: '2025-03-10', priority: 'High', status: 'To Do' },
    { id: 2, title: 'Task 2', description: 'Description 2', dueDate: '2025-03-12', priority: 'Medium', status: 'In Progress' }
  ];

}
