import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  onAddTask(): void {
    const newTask: Task = {
      id: Date.now(), // Use the current time as a unique ID
      title: this.title,
      description: this.description,
      completed: false,
    };
    this.taskService.addTask(newTask);
    this.title = '';
    this.description = '';
  }
}
