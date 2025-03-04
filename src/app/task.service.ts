import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = this.loadTasks();  // Load tasks from LocalStorage if available
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  constructor() { }

  // Check if localStorage is available in the browser
  private get isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  // Load tasks from LocalStorage or return an empty array if none
  private loadTasks(): Task[] {
    if (this.isBrowser) {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }
    return [];
  }

  // Save tasks to LocalStorage
  private saveTasks(): void {
    if (this.isBrowser) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  // Get the tasks as an observable
  getTasks() {
    return this.tasksSubject.asObservable();
  }

  // Add a new task and notify subscribers
  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasks();  // Save updated tasks to LocalStorage
    this.tasksSubject.next(this.tasks);
  }

  // Toggle task completion (optional)
  toggleTaskCompletion(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();  // Save updated tasks to LocalStorage
      this.tasksSubject.next(this.tasks);
    }
  }

  // Delete a task (optional)
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.saveTasks();  // Save updated tasks to LocalStorage
    this.tasksSubject.next(this.tasks);
  }
}
