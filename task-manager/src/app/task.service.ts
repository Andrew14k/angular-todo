import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  // Get all tasks
  getTasks(): Task[] {
    return [...this.tasks];
  }

  // Add a new task
  addTask(task: Task): void {
    this.tasks.push(task);
  }

  // Delete a task
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // Toggle completion of a task
  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
}
