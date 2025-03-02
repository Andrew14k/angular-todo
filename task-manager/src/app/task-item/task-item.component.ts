import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<void>();
  @Output() toggleCompletion = new EventEmitter<void>();

  onDelete(): void {
    this.delete.emit();
  }

  onToggleCompletion(): void {
    this.toggleCompletion.emit();
  }
}
