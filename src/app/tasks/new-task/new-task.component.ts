import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NewTask} from './new-task.model'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({required:true}) userId!:string;
  
  enteredTitle = '';
  enteredSummary ='';
  enteredDate = '';
  private tasksService = inject(TasksService);
  //constructor(private _TasksService:TasksService){}



  onCancel(){
    this.close.emit();
   }

   onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId)
    this.close.emit();
   }
  
}
