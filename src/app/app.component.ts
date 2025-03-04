import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // For ngModel
import { CommonModule } from '@angular/common';  // For ngFor

import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // This makes the component standalone
  imports: [FormsModule, CommonModule]  // Import FormsModule and CommonModule
})
export class AppComponent {
  tasks: Task[] = [];
  taskTitle: string = '';
  taskDescription: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  onAddTask(): void {
    if (this.taskTitle && this.taskDescription) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskTitle,
        description: this.taskDescription,
        completed: false
      };
      this.taskService.addTask(newTask);
      this.taskTitle = '';
      this.taskDescription = '';
    }
  }

  toggleTaskCompletion(id: number) {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
